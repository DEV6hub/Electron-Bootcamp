const axios = require('axios');

(window.catalog = window.catalog || {}),
	(function(n) {
		catalog.handler = {
			init: function() {
				let shirtsContainer = document.querySelector('#shirts-container');
				axios({
					method: 'get',
					url: 'http://localhost:4000/tshirts'
				})
					.then(function(response) {
						//handle success
						let newHTML = '';
						for (let i = 0; i < response.data.length; i++) {
							newHTML +=
								'<div class="card"><div class="img-content">' +
								'<img src=' +
								'".' +
								response.data[i].imgSrc +
								'"' +
								' alt="TshirtImage" style="width:100%"> </div>' +
								'<div class="text-content"><h4>' +
								response.data[i].name +
								'</h4>' +
								'<p class="title">' +
								response.data[i].type +
								'</p>' +
								'<p>$' +
								response.data[i].price +
								'</p></div>' +
								'<p><button>Buy</button></p></div>';
						}
						shirtsContainer.innerHTML = newHTML;
						// shirtsContainer.append(response.data);
					})
					.catch(function(response) {
						//handle error
						console.log(response);
					});
			}
		};

		n(function() {
			catalog.handler.init();
		});
	})(jQuery);
