
const axios =require('axios');

const {ipcRenderer} = require('electron');

const selectDirBtn = document.getElementById('attach-file');

selectDirBtn.addEventListener('click', (event) => {
    event.preventDefault();
  ipcRenderer.send('open-file-dialog')
})

ipcRenderer.on('selected-directory', (event, path) => {
  document.getElementById('selected-file').innerHTML = `You selected: ${path}`
})

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
