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



  }, function(items) {
	  console.log(items);
	  if (!window.location.href.includes("checkout")) {
		window.location.replace("https://www.supremenewyork.com/checkout");
	  }
	  	
	  	document.getElementsByName("order[terms]")[0].click()
	  	document.getElementsByName("order[terms]")[1].click()

		document.getElementsByName('order[billing_name]')[0].value = items.shipping_name + " " +  items.shipping_last_name;

		document.getElementsByName('order[email]')[0].value = items.j_username;

		document.getElementsByName('order[billing_address]')[0].value = items.shipping_address_line_1;
		document.getElementsByName('order[billing_address_2]')[0].value = items.shipping_address_line_2;
		document.getElementsByName('order[billing_city]')[0].value = items.shipping_city;
		document.getElementsByName('order[billing_state]')[0].selectedIndex = items.shipping_state;
		document.getElementsByName('order[billing_zip]')[0].value = items.shipping_zip_code;
		document.getElementsByName('order[tel]')[0].value = items.shipping_phone;
		
		document.getElementsByName('credit_card[rvv]')[0].value = items.card_cvn;
		document.getElementsByName('credit_card[month]')[0].selectedIndex = items.card_expirationMonth;
		document.getElementsByName('credit_card[year]')[0].selectedIndex = items.card_expirationYear;

		document.getElementsByName('credit_card[nlb]')[0].value = items.card_number;

		document.getElementsByName("commit")[0].click();
	  
  
  });
  
})();
