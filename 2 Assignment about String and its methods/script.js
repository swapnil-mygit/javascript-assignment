var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var content = document.getElementById("content");

function clickMe() {
    var firstValue = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1);
    var secondValue = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1);
    var age = document.getElementById("age").value;


    if (age <= 10) {
        content.innerText = "Name: " + firstValue + " " + secondValue + "\n" + "Email: " + email.value + "\n" + "You are a kid!";
    }
    else {
        content.innerText = "Name: " + firstValue + " " + secondValue + "\n" + "Email: " + email.value + "\n" + "You are a genius!";
    }
}