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
`json-server --watch tshirts.json --port 4000` -- You can check 

 You can check by typing below urls in your browser to see if the server has spin up.

 http://localhost:3000/userInfo
 http://localhost:4000/tshirts 

 ## Run Electron App

 `electron .`