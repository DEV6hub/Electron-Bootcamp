const path = require('path');

const electron = require('electron');

const BrowserWindow = electron.remote.BrowserWindow;

const {ipcRenderer} = require('electron');

const selectDirBtn = document.getElementById('attach-file');

const axios =require('axios');

selectDirBtn.addEventListener('click', (event) => {
    event.preventDefault();
  ipcRenderer.send('open-file-dialog')
})

ipcRenderer.on('selected-directory', (event, path) => {
  document.getElementById('selected-file').innerHTML = `You selected: ${path}`
})

const notification = {
  title: 'Basic Notification',
  body: 'Short message part'
}
const myNotification = new window.Notification(notification.title, notification);
// const notificationButton = document.getElementById('basic-noti')

// notificationButton.addEventListener('click', () => {
//   const myNotification = new window.Notification(notification.title, notification)

//   myNotification.onclick = () => {
//     console.log('Notification clicked')
//   }
// })


submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let formData = new FormData(document.querySelector('form'));
  let userInfo = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    attachedFile: formData.get('selected-file'),
    subject: formData.get('subject')
  };
  axios({
    method: 'post',
    url: 'http://localhost:5000/contactUs',
    data: userInfo,
    })
    .then(function (response) {
        //handle success
        console.log(response);
        alert('Thanks for your feedback.We will get in touch soon...');
        
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
})
