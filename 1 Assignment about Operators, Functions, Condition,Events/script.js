function purchase() {
    let amount = document.getElementById("amount").value;
    let remain;
    if (amount >= 45) {
        remain = amount - 45;
        alert("Ashish purchased Grocery and Ice cream both and the left amount is Rs. " + remain);
    }
    else if (amount >= 25) {
        remain = amount - 25
        alert("Ashish purchased only grocery and the left amount is Rs. " + remain);
    }
    else if (amount == "") {
        alert("Please enter the amount");
    }
    else {
        alert("Ashish couldn't purchase anything due to less money")
    }
}