const electron = require('electron');
const { shell } = require('electron');
const path = require('path');
const axios =require('axios');



window.signup = window.signup || {},
function(n) {
    signup.handler = {
      init: function() {
        const notification = {
          title: 'Signup Alert',
          body: 'Welcome to Dev6'
         // icon: path.join(__dirname, '../images/TShirt.png')
        }
        const myNotification = new window.Notification(notification.title, notification);
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
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
          // if (formData.get('email') !== '' && 
          //     formData.get('psw') !== '' && 
          //     formData.get('psw-repeat') !== '' &&
          //     formData.get('psw') === formData.get('psw-repeat')) {
          //   console.log('form is valid');
          //   axios({
          //     method: 'post',
          //     url: 'http://localhost:3000/userInfo',
          //     data: userInfo,
          //     })
          //     .then(function (response) {
          //         //handle success
          //         console.log(response);
          //         const myNotification = new window.Notification(notification.title, notification);
          //     })
          //     .catch(function (response) {
          //         //handle error
          //         console.log(response);
          //     });
          // } else {
          //   console.log('form is empty');
          //   alert('Please enter the form before submitting !')
          // }
          
        });
      },
      registerClickEvent: function () {
        $('#termsPrivacyLink').click(function () {
          shell.openExternal('https://www.dev6.com/');
        })
      }
    };

    n(function() {
      signup.handler.init();
      signup.handler.registerClickEvent();
    })

}(jQuery);
