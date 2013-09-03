//amendes1971@hotmail.com
function getCustomerInfo()
{
	var phone = document.getElementById("phone").value;
	var url = "lookupCustomer.php?phone="+ escape(phone);
	request.open("GET", url, true);
	request.onreadystatechange = updatePage;
	request.send(null);

}

function updatePage()
{
	if(request.readyState == 4) {
		if(request.status == 200) {
			var customerAddress = request.responseText;
			document.getElementById('address').value = customerAddress;
		}else {
			alert("Error! Request status is " + request.status);
		}
	}
}

function submitOrder()
{
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;
	var order = document.getElementById("order").value;
	/*
	var url = "placeOrder.php?phone=" + escape(phone) +
									"&address=" + escape(address) +
									"&order="+ escape(order);
	url = url + "&dummy=" + new Date().getTime();
	*/

	var url = "placeOrder.php";
	request.open("POST", url, true);
	request.onreadystatechange = showConfirmation;
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send("phone="+escape(phone)+
					"&address="+escape(address)+
					"&order="+escape(order));
}

function showConfirmation()
{
	if(request.readyState == 4) {
		if(request.status == 200) {
			var response = request.responseText;
			//localiza o formulario na pagina web
			var mainDiv = document.getElementById("main-page");
			var orderForm = document.getElementById("order-form");


			//cria algum texto de confirmação
			pElement = document.createElement("p");
			textNode = document.createTextNode("Your order should arrive within " + response + " Minutes. Enjoy your pizza!");
			pElement.appendChild(textNode);
			mainDiv.replaceChild(pElement, orderForm);

		}else {
			var message = request.getResponseHeader("Status");
			if((message.length == null) || (message.length <= 0)) {
				alert('Error! Request status is ' + request.status);
			}else {
				alert(message);
			}
		}
	}
}