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

 ## To make notifications work on Windows follow below steps. These steps are taken from Electron documentation https://electronjs.org/docs/tutorial/notifications

 Steps to follow during development mode.
 1. During development add node_modules\electron\dist\electron.exe to your Start Menu. To do so, navigate to file in explorer, right-click and 'Pin to Start Menu'.
 2. Then add below line in main.js `app.setAppUserModelId(process.execPath)`.
 3. Now, the notifications should appear in windows during development as well.

 Steps to follow during production mode.
 1. During production version, replace Step2 with below lines of code.
    `const appId = "electron-shirtastic-app";`
    `app.setAppUserModelId(appId);`
 2. Now build your electron app using command `npm run buildWin`.
 3. Click on the exe file generated from dist folder.
 4. Pin the application to Start menu.
 5. Now you should see the notifications working for Production version of Electron app as well.

## To make notifications work on macOS follow below steps.
 If notifications are not working during development mode. Perform below set of steps and run your application once for Production version.Now when you come back to development mode and re-run the electron app , notifications will start working for you in development mode as well.

 1. Build your electron app using command `npm run buildMac`.
 2. Run the dmg file from dist folder.
 3. Launch the application from Launchpad.
 4. Now you should see the notifications working for Production version of Electron app.



