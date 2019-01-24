const path = require('path');

const electron = require('electron');

const BrowserWindow = electron.remote.BrowserWindow;

const {ipcRenderer} = require('electron');

const customerFeedbackBtn = document.getElementById('customer-feedback');

customerFeedbackBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, '../screens/customer-feedback.html');
    let win = new BrowserWindow({ width: 800, height: 700, frame: true });
    // // Open the DevTools.
    win.webContents.openDevTools()
    win.loadURL(modalPath);
    win.show();
});


const crashReporter = require('electron').crashReporter;
crashReporter.start({
    productName: 'electron-shirtastic',
    companyName: 'Dev6',
    submitURL: 'http://localhost:1127/crashreports',
    uploadToServer: true
});
