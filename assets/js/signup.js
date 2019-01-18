const axios =require('axios');

window.signup = window.signup || {},
function(n) {
    signup.handler = {
      init: function() {
        $('#signupBtn').click( function () {
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
                alert('Sign up done successfully!!!')
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
