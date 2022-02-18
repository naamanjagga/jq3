var products = [
	{ id: 101, name: 'Basket Ball', image: 'basketball.png', price: 150 },
	{ id: 102, name: 'Football', image: 'football.png', price: 120 },
	{ id: 103, name: 'Soccer', image: 'soccer.png', price: 110 },
	{ id: 104, name: 'Table Tennis', image: 'table-tennis.png', price: 130 },
	{ id: 105, name: 'Tennis', image: 'tennis.png', price: 100 }
];
var cart = [];
$(document).ready(function() {
	$('#clearCart').on('click', function() {
		cart = [];
		dis();
	});
	display();
});

function addTCart(x) {
	var html =
		'<table><tr><th>image</th><th>id</th><th>price</th><th>Quantity</th><th>edit quantity</th><th>update quantity</th><th>remove product</th></tr>';
	var id = x;
	if (cart.length == 0) {
		for (var i = 0; i < products.length; i++) {
			if (products[i].id == id) {
				var obj = {
					image: products[i].image,
					id: products[i].id,
					price: products[i].price,
					name: products[i].name,
					quantity: 1
				};
				cart.push(obj);
			}
			dis();
		}
	} else {
		var flag = 0;
		for (var j = 0; j < cart.length; j++) {
			if (cart[j].id == id) {
				flag = 1;
			}
		}
		if (flag == 1) {
			for (var j = 0; j < cart.length; j++) {
				if (cart[j].id == id) {
					cart[j].quantity++;
					dis();
					return;
				}
			}
		} else {
			for (var i = 0; i < products.length; i++) {
				if (products[i].id == id) {
					var obj = {
						image: products[i].image,
						id: products[i].id,
						price: products[i].price,
						name: products[i].name,
						quantity: 1
					};

					cart.push(obj);
				}
				dis();
			}
			return;
		}
	}
}
function remove(x) {
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == x) {
			console.log(cart);
			if (confirm('Are you sure you want to delete' + cart[i].id + ' row')) {
				cart.splice(i, 1);
			}
		}
	}
	dis();
}

function update(x) {
	console.log(x);
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == x) {
			var u_value = document.getElementById('quantity' + [ i ]).value;
			console.log(u_value);
			if (u_value == '') {
				alert('please enter a value');
			} else {
				cart[i].quantity = u_value;
				dis();
			}
		}
	}
}
function increace(x){
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == x) {
			cart[i].quantity++;
			dis();
			
		}
	}
}
function decreace(y){
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == y) {
			cart[i].quantity--;
			dis();
			
		}
	}
}

function display() {
	var dis = '<div id="products"><div id="product-101" class="product">';
	for (var i = 0; i < products.length; i++) {
		dis +=
			'<img src="images/' +
			products[i].image +
			'"</img><h3 class="title"><a href="#">Product' +
			products[i].id +
			'</a></h3><span>Price: $' +
			products[i].price +
			'</span><a class="add-to-cart" onclick="addTCart(' +
			parseInt(products[i].id) +
			')" href="#">Add To Cart</a>';
	}

	dis += '</div></div>';
	document.getElementById('products').innerHTML = dis;
}

function dis() {
	var html =
		'<table><tr><th>image</th><th>id</th><th>price</th><th>Quantity</th><th>ADD</th><th>SUB</th><th>edit quantity</th><th>update quantity</th><th>remove product</th></tr>';
	for (var i = 0; i < cart.length; i++) {
		html +=
			'<tr><td>' +
			cart[i].image +
			'</td><td>' +
			cart[i].id +
			'</td><td>' +
			cart[i].price +
			'</td><td>' +
			cart[i].quantity +
			'</td><td><button class="Submit" id="btn" value="update" onclick="increace(' +
			parseInt(cart[i].id) +
			')">+</button></td><td><button class="Submit" id="btn" value="update" onclick="decreace(' +
			parseInt(cart[i].id) +
			')">-</button></td><td><input type="text" id="quantity' +
			[ i ] +
			'" ></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="update" onclick="update(' +
			parseInt(cart[i].id) +
			')">update</button></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="remove" onclick="remove(' +
			parseInt(cart[i].id) +
			')">remove product</button></td></tr>';
	}
	html += '</table';
	document.getElementById('content').innerHTML = html;
}
