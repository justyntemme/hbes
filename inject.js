// this is the code which will be injected into a given page... shipping_last_name

(function() {

	// just place a div at top right


  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
      shipping_name: "name",
	  shipping_last_name: "last name",
	  shipping_address_line_1: "street address",
	  shipping_address_line_2: "street address Line 2",
	  shipping_city: "shipping_city",
	  shipping_state: "state",
	  shipping_zip_code: "zip",
	  shipping_phone: "phone #"

  }, function(items) {
	  console.log(items);

    document.getElementsByName('shipping_name')[0].value = items.shipping_name;
	document.getElementsByName('shipping_last_name')[0].value = items.shipping_last_name;
    document.getElementsByName('shipping_address_line_1')[0].value = items.shipping_address_line_1;
	document.getElementsByName('shipping_address_line_2')[0].value = items.shipping_address_line_2;
	document.getElementsByName('shipping_city')[0].value = items.shipping_city;
	document.getElementsByName('shipping_state')[0].selectedIndex = items.shipping_state;
	document.getElementsByName('shipping_zip_code')[0].value = items.shipping_zip_code;
	document.getElementsByName('shipping_phone')[0].value = items.shipping_phone;

   
  });



})();