// Insert contact information in the HTML page using JavaScipt.
var username_a = 'anto';
var username_b = 'niol';
var username_c = 'ope';
var username_d = 'z';
var username_e = 'mc';
var hostname_a = 'u';
var hostname_b = 'm.e';
var hostname_c = 's';
var phone_number_a = '+34 ';
var phone_number_b = '868 ';
var phone_number_c = '88 ';
var phone_number_d = '1853';
var total = '<big>Contact:</big> ' + phone_number_a + phone_number_b + phone_number_c + phone_number_d + ' · <a href="ma' + 'il' + 'to:' + username_a + username_b + username_c + username_d + username_e + '@' + hostname_a + hostname_b + hostname_c + '">' + username_a + username_b + username_c + username_d + username_e + '@' + hostname_a + hostname_b + hostname_c + '</a>';
document.getElementById("div_for_contact_information").innerHTML = total;
