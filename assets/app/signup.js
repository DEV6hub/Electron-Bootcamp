
  window.signup = window.signup || {},
  signup.handler = {
    init: function() {
      $('#signupBtn').click( function (event) {
        event.preventDefault();
        let formData = new FormData(document.querySelector('form'));
        formData.set('email', formData.get('email'));
        formData.set('password', formData.get('psw'));
        let userInfo = {
          email: formData.get('email'),
          password: formData.get('psw')
        };
        $.ajax({
          url: 'http://localhost:3000/userInfo',
          type: 'POST',
          data: userInfo,
          success: function (result) {
            alert('You have successfully registered');
            console.log(result);
          },
          error: function(error) {
            alert('Something went wrong.Please try again!');
            console.log(error);
          }
        })
      });
    }
  };
  signup.handler.init();

