# Electron Shirtastic App

## Install Node.JS and Electron

Node.JS
You can visit https://nodejs.org/en/ to gather detailed instructions on installing Node.Js.

Electron
`npm install -g electron`

## To install dependencies

Run `npm install`

## To install Restful Server

The json server will serve rest api's to be used for Electron Shirtastic.By default it will run on
localhost:3000.Go to folder JSON Server at the root level and run below commands.

`json-server --watch signup.json`  
`json-server --watch tshirts.json --port 4000`
`json-server --watch contactUs.json --port 5000`
`json-server --watch crashReport.json --port 2000`

 You can check by typing below urls in your browser to see if the server has spin up.

 http://localhost:3000/userInfo
 http://localhost:4000/tshirts 
 http://localhost:5000/contactUs
 http://localhost:2000/crashReport


 ## Run Electron App

 `electron .`


 ## To view crash reporting feature run below command on your terminal
`npm install -g simple-breakpad-server`

Navigate to below url in your browser to see the server and a list of crash reports submitted by Electron app.
http://localhost:1127/crashreports 

 ## To host auto-updates from local server , follow below steps
 1. Go to dist folder in a new terminal window
 2. Run `http-server`.
 3. You can verify by visiting http://127.0.0.1:8080 on your browser to see the artifacts hosted.