// shipping_address_line_2

document.getElementsByName("save_options")[0].addEventListener("click", save_options);
document.getElementsByName("restore_options")[0].addEventListener("click", restore_options);

function save_options() {
    var shipping_name = document.getElementById("shipping_name").value;
    var shipping_last_name = document.getElementById("shipping_last_name").value;
    var shipping_address_line_1 = document.getElementById("shipping_address_line_1").value;
    var shipping_address_line_2 = document.getElementById("shipping_address_line_2").value;
    var shipping_city = document.getElementById("shipping_city").value;
    var shipping_state = document.getElementById("shipping_state").selectedIndex;
    var shipping_zip_code = document.getElementById("shipping_zip_code").value;
    var shipping_phone = document.getElementById("shipping_phone").value;

    chrome.storage.sync.set({
        shipping_name: shipping_name,
        shipping_last_name: shipping_last_name,
        shipping_address_line_1: shipping_address_line_1,
        shipping_address_line_2: shipping_address_line_2,
        shipping_city: shipping_city,
        shipping_state: shipping_state,
        shipping_zip_code: shipping_zip_code,
        shipping_phone: shipping_phone,
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
      shipping_name: "name",
      shipping_last_name: "last name",
      shipping_address_line_1: "Address Line 1",
      shipping_address_line_2: "Address Line 2",
      shipping_city: "City",
      shipping_state: "State",
      shipping_zip_code: "zip",
      shipping_phone: "phone #"
  }, function(items) {

    document.getElementById('shipping_name').value = items.shipping_name;
    document.getElementById('shipping_last_name').value = items.shipping_last_name;
    document.getElementById('shipping_address_line_1').value = items.shipping_address_line_1;
    document.getElementById('shipping_address_line_2').value = items.shipping_address_line_2;
    document.getElementById('shipping_city').value = items.shipping_city;
    document.getElementById('shipping_state').selectedIndex = items.shipping_state;
    document.getElementById('shipping_zip_code').value = items.shipping_zip_code;
    document.getElementById('shipping_phone').value = items.shipping_phone;
   
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save_options').addEventListener('click',
    save_options);
