const axios = require('axios');

window.catalog = window.catalog || {},
function(n) {
    catalog.handler = {
      init: function() {
        let shirtsContainer = document.querySelector('#shirts-container');
        axios({
          method: 'get',
          url: 'http://localhost:4000/tshirts'
          })
          .then(function (response) {
              //handle success
              let newHTML = '';
              for (let i = 0; i < response.data.length; i++) {
                newHTML += '<div class="card">'
               + '<img src=' + '".' + response.data[i].imgSrc + '"' + ' alt="TshirtImage" style="width:100%">'
               + '<h1>' + response.data[i].name + '</h1>'
               + '<p class="title">' + response.data[i].type + '</p>'
               + '<p>$' + response.data[i].price +'</p>'
               + '<p><button>Buy</button></p></div>';
              }
              shirtsContainer.innerHTML = newHTML;
             // shirtsContainer.append(response.data);
          })
          .catch(function (response) {
              //handle error
              console.log(response);
          });
      }
    };

    n(function() {
      catalog.handler.init();
    })

}(jQuery);
