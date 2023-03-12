<h1>Website and API for Synopsys Science Fair 22-23 Project</h1>
<h2>Robust, Lora-based Mesh Network - Solution for Wildfire Detection and Growth Forecast through Custom Prediction Algorithm</h2>

---

UI Screenshot:

![image](https://user-images.githubusercontent.com/77950550/224387430-be3252d5-e3ed-4d2b-94e6-9bb13b9a8d2d.png)

---

Enter Hardware Screenshot Here

---

Find API routes in routes/api.js <br>
Find API implementation & documentation in controllers/_module_.js <br>
Find DB schema in models/_schema_.js <br>
Find Frontend Impl. in _client/src_ folder <br>

API Run on port 8000 (change via .env file), Frontend Run on port 3000

<h2>Motivations</h2>

The ever more frequent natural disasters are harmful tragedies that develop from an unfortunate environmental coincidence. Some disasters have quantifiable signs that can be compiled into a measure of risk. Though the sensor technologies exist, there lacks a system to connect a large network of sensors to survey the environment. The project aims to develop a software framework for IoT sensor networks to be used in environmental surveillance. It presents a networking protocol capable of maintaining a mesh topology, allowing for a greater covered area. 

Past IoT solutions lacked an extensible topology and a long-ranged radio, often only used to cover small areas. Most IoT are not designed to span very large areas – their architectures typically only implement a hub-and-spoke topology, limiting the network diameter by the radio range. Past radio modules typically have a range-to-power tradeoff, and as such most IoT solutions do not use modules with great peer-to-peer range.
Contemporary techniques in the detection of wildfires – such as aerial, visual, or infrared – require the fire to have already grown considerably.

<h2>Project Details: </h2>
 - Arduino Nano: small, low power, extensible microcontroller <br>
 - ESP-8266: similar to the nano, but with WiFi capabilities. <br>
 - Ra-02 LoRa Module: SPI interface, long-range, low-power module with interrupts. <br>
 - MongoDB & Mongoose: Development database and its Node.js interfacing library. <br>
 - Express.js: A web application framework for Node.js. <br>
 - React.js: JS library for reactive web pages. <br>
 - Google Maps API: API to display interactive maps. <br>
 - Pandas: Python library for handling mass data. <br>

<h2>Setup:</h2>
<h3>Installation:</h3> <br>
 - Clone repo and install neccesary packages from package.json files in both root and <em>client</em> folders. <br>
<h3>MongoDB:</h3> <br>
- Sign up for a MongoDB account, create a data cluster, and copy paste your connection key into <em>.env</em> under the <em>DATABASE_URI</em> section. <br>
<h3>Hardware Setup:</h3> <br>
... <br>
<h3>Google Maps API:</h3> <br>
- Project employs Google Maps API to visualize geographical data to impose node markers upon. In order to set this up, follow this great post from Google: https://support.google.com/looker-studio/answer/10988075?hl=en <br>

- After ensuring all has been set up, enter your API key on line 24 of *src/pages/components/Map.js*. 

![image](https://user-images.githubusercontent.com/77950550/224384180-e7780625-506f-49b2-91b1-cc9645b2b296.png)

<h3>Running the project: </h3>
- API and client are run on different ports. If using VS, split terminal into two seperate processes, and run the following commands <em>in the root dir</em>: <br>
<b> 1) npm run start </b> //starts server <br> 
<b> 2) npm run client </b> //starts client  <br> 

<h2>Engineering Notebook: </h2> 

[Engineering Notebook.pdf](https://github.com/beranki/loRAFire/files/10952026/Engineering.Notebook.pdf)

![](https://user-images.githubusercontent.com/77950550/224572047-0276ec26-0316-41ac-9474-91e6d7daa42c.jpg)
