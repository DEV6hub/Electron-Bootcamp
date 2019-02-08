
const axios =require('axios');

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
