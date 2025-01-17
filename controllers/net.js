const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const nodeController = require('../controllers/node');
const historyController = require('../controllers/history');

const Node = require('../models/node');

// ======= Routes ======
// POST <str>: Handles all data packets from the LoRaNet. query format: "?str=[base64 packet]"


// helper, extracts value from byte stream
const intFromBytes = (buf, start, len) => {
    let x = 0;
    for (let i = 0; i < len; i++) {
        x <<= 8;
        x += buf[start + i];
    }
    return x;
};

// POST: Handles all data packets from the LoRaNet. b64 passed by req.body
exports.packet_handler = [
    bodyParser.text(),
    (req, res, next) => {
        console.log("Got req, body: ", req.body);

        // Parse message & extract header
        const buf = Buffer.from(req.body, "base64");
        const header = intFromBytes(buf, 0, 1);
        const srcID = intFromBytes(buf, 1, 2);
        const packetID = intFromBytes(buf, 5, 2);
        const hdr_len = 7;
        
        console.log("RECV msg. header: %d, srcID: %d, packetID: %d", header, srcID, packetID);
    

        Node.findById(srcID, (err, node) => { // Check if outdated
            if (err) 
                return next(err);
            if (node == null) {
                const node = new Node({
                    _id: srcID,
                    location: { latitude: 0.0, longitude: 0.0 },
                });
                node.save( err => err ? next(err) : res.status(201).json(node) );
                console.log("Unknown node, created new entry");
                return;
            } if (node.lastPacketID >= packetID) {
                console.log("Oudated Packet, last ID: ", node.lastPacketID); 
                return res.status(400).send("Outdated Packet");           
            }


            switch (header) {
                case 1:
                    const temp = intFromBytes(buf, hdr_len + 0, 1);
                    const humidity = intFromBytes(buf, hdr_len + 1, 1);
                    const mq2 = intFromBytes(buf, hdr_len + 2, 2);
                
					// ====== DEMO Purposes =======
					if (temp == 100) {
						console.log("BUTTON PRESSED! Temp received: ", temp);
					}

					// ============================
					
                    historyController.put(srcID, packetID, Date.now(), temp, humidity, mq2);
                    res.status(200).send("ACK from Node.js");
                break;
                case 2:
                    let adj = [];
                    for (let i = hdr_len; i < buf.length; i += 2) {
                        let peerId = intFromBytes(buf, i, 2);
                        if (peerId > 0) adj.push(peerId);
                    }
                
                    nodeController.update(srcID, packetID, Date.now(), adj);    
                    res.status(200).send("ACK from Node.js");
                break;
                default:
                    res.status(200).send("Invalid Header");
            }
        });
    }
];
