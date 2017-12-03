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
    var payment_credit_card_type = document.getElementById("payment-credit-card-type").selectedIndex;
    var card_number = document.getElementById("card_number").value;
    var card_cvn = document.getElementById("card_cvn").value;
    var payment_card_nameOnCard = document.getElementById("payment_card_nameOnCard").value;
    var card_expirationMonth = document.getElementsByName("card_expirationMonth")[0].selectedIndex;
    var card_expirationYear = document.getElementsByName("card_expirationYear")[0].selectedIndex;
    var j_username = document.getElementById("j_username").value;
    var j_password = document.getElementById("j_password").value;

    chrome.storage.sync.set({
        shipping_name: shipping_name,
        shipping_last_name: shipping_last_name,
        shipping_address_line_1: shipping_address_line_1,
        shipping_address_line_2: shipping_address_line_2,
        shipping_city: shipping_city,
        shipping_state: shipping_state,
        shipping_zip_code: shipping_zip_code,
        shipping_phone: shipping_phone,
        payment_credit_card_type: payment_credit_card_type,
        card_number: card_number,
        card_cvn: card_cvn,
        payment_card_nameOnCard: payment_card_nameOnCard,
        card_expirationMonth: card_expirationMonth,
        card_expirationYear: card_expirationYear,
        j_username: j_username,
        j_password: j_password
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
      shipping_phone: "phone #",
      payment_credit_card_type: "Card type",
      card_number: "test",
      card_cvn: "123",
      payment_card_nameOnCard: "Name On Card",
      card_expirationMonth: "MM",
      card_expirationYear: "YY",
      j_username: "",
      j_password: ""
  }, function(items) {

    document.getElementById('shipping_name').value = items.shipping_name;
    document.getElementById('shipping_last_name').value = items.shipping_last_name;
    document.getElementById('shipping_address_line_1').value = items.shipping_address_line_1;
    document.getElementById('shipping_address_line_2').value = items.shipping_address_line_2;
    document.getElementById('shipping_city').value = items.shipping_city;
    document.getElementById('shipping_state').selectedIndex = items.shipping_state;
    document.getElementById('shipping_zip_code').value = items.shipping_zip_code;
    document.getElementById('shipping_phone').value = items.shipping_phone;
    document.getElementById('payment-credit-card-type').selectedIndex = items.payment_credit_card_type;
    document.getElementById('card_number').value = items.card_number;
    document.getElementById('card_cvn').value = items.card_cvn;
    document.getElementById('payment_card_nameOnCard').value = items.payment_card_nameOnCard;
    document.getElementsByName('card_expirationMonth')[0].selectedIndex = items.card_expirationMonth;
    document.getElementsByName('card_expirationYear')[0].selectedIndex = items.card_expirationYear;
    document.getElementById('j_username').value = items.j_username;
    document.getElementById('j_password').value = items.j_password;
   
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save_options').addEventListener('click',
    save_options);
