const axios =require('axios');
const path = require('path');

window.signup = window.signup || {},
function(n) {
    signup.handler = {
      init: function() {
        const notification = {
          title: 'Signup Alert',
          body: 'Welcome to Dev6',
          icon: path.join(__dirname, '../images/TShirt.png')
        }
        $('#signupBtn').click( function (event) {
          event.preventDefault();
          let formData = new FormData(document.querySelector('form'));
          formData.set('email', formData.get('email'));
          formData.set('password', formData.get('psw'));
          let userInfo = {
            email: formData.get('email'),
            password: formData.get('psw')
          };
          axios({
            method: 'post',
            url: 'http://localhost:3000/userInfo',
            data: userInfo,
            })
            .then(function (response) {
                //handle success
                console.log(response);
                const myNotification = new window.Notification(notification.title, notification);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        });
      }
    };

    n(function() {
      signup.handler.init();
    })

}(jQuery);
