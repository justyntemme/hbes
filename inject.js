// this is the code which will be injected into a given page... shipping_last_name

(function() {


  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
      shipping_name: "name",
	  shipping_last_name: "last name",
	  shipping_address_line_1: "street address",
	  shipping_address_line_2: "street address Line 2",
	  shipping_city: "shipping_city",
	  shipping_state: "state",
	  shipping_zip_code: "zip",
	  shipping_phone: "phone #",
	  payment_credit_card_type: "card Type",
	  card_number: "card number",
	  card_cvn: "Security Code",
	  payment_card_nameOnCard: "Name On Card",
	  card_expirationMonth: "MM",
	  card_expirationYear: "YY",
	  j_username: "",
	  j_password: ""



  }, function(items) {
	  console.log(items);
	  window.location.replace("https://www.gucci.com/us/en/checkout/single#step-payment");

	  if (window.location.href.includes("login")) {
		  document.getElementById("j_username").value = items.j_username;
		  document.getElementById("j_password").value = items.j_password;

		  document.getElementById("loginForm").submit();
		
	  } else {

		document.getElementById('place-order-terms').checked = true;
		document.getElementsByName('shipping_name')[0].value = items.shipping_name;
		document.getElementsByName('shipping_last_name')[0].value = items.shipping_last_name;
		document.getElementsByName('shipping_address_line_1')[0].value = items.shipping_address_line_1;
		document.getElementsByName('shipping_address_line_2')[0].value = items.shipping_address_line_2;
		document.getElementsByName('shipping_city')[0].value = items.shipping_city;
		document.getElementsByName('shipping_state')[0].selectedIndex = items.shipping_state;
		document.getElementsByName('shipping_zip_code')[0].value = items.shipping_zip_code;
		document.getElementsByName('shipping_phone')[0].value = items.shipping_phone;
		document.getElementsByName('payment-card-type')[0].selectedIndex = items.payment_credit_card_type;
		
		document.getElementsByName('card_cvn')[0].value = items.card_cvn;
		document.getElementsByName('payment-card-nameOnCard')[0].value = items.payment_card_nameOnCard
		document.getElementById('card_expirationMonth').selectedIndex = items.card_expirationMonth;
		document.getElementById('card_expirationYear').selectedIndex = items.card_expirationYear;

		document.getElementsByName('card_number')[0].value = items.card_number;

		document.getElementsByClassName("verify-payment-type")[0].click();
	  }

   
  });



})();