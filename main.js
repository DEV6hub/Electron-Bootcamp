const {app, BrowserWindow, Menu} = require('electron')
const shell = require('electron').shell 
const path = require('path')
const url = require('url')
const ipc = require('electron').ipcMain;
const { crashReporter } = require('electron');

crashReporter.start({
  productName: 'electron-shirtastic',
  companyName: 'Dev6',
  submitURL: 'http://localhost:1127/crashreports',
  uploadToServer: true
})
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
// Enable live reload for all the files inside your project directory
//soft reset only for front-end code
// require('electron-reload')(__dirname);
// another soft reset
//    require('electron-reload')(__dirname, { 
//        electron: require('${__dirname}/../../node_modules/electron') 
//     })
//hard reset
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// To crash the main process in order to test Crash Reporting simple-breakpad-server
//process.crash();


  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1200, height: 800})
    // and load the index.html of the app.
    win.loadFile('index.html')
  
    // Open the DevTools.
    win.webContents.openDevTools()
    // Devtron for debugging application
    require('devtron').install();
    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })
    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'About Dev6',
                    click() {
                        shell.openExternal('https://www.dev6.com/')
                    }
                },
                {type: 'separator'},
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        },
        {
            label: 'Info'
        }
    ])
    Menu.setApplicationMenu(menu);
    
  }
  
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)
  
  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

const {ipcMain, dialog} = require('electron')

ipcMain.on('open-file-dialog', (event) => {
  dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory']
  }, (files) => {
    if (files) {
      event.sender.send('selected-directory', files)
    }
  })
})

  