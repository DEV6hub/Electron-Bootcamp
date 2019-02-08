window.catalog = window.catalog || {};
catalog.handler = {
  init: function() {
    let shirtsContainer = document.querySelector('#shirts-container');
    $.ajax({
      url: 'http://localhost:4000/tshirts',
      type: 'GET',
      success: function (response) {
        //handle success
        let newHTML = '';
        for (let i = 0; i < response.length; i++) {
          newHTML += '<div class="card">'
         + '<img src=' + '".' + response[i].imgSrc + '"' + ' alt="John" style="width:100%">'
         + '<h1>' + response[i].name + '</h1>'
         + '<p class="title">' + response[i].type + '</p>'
         + '<p>$' + response[i].price +'</p>'
         + '<p><button>Buy</button></p></div>';
        }
        shirtsContainer.innerHTML = newHTML;
      },
      error: function(error) {
        alert('Something went wrong.Please try again!');
        console.log(error);
      }
    })
  }
};
catalog.handler.init();