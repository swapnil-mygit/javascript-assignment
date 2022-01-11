var details = {
    firstName: "Jhon",
    lastName: "Peterson",
    city: "New york",
    emp_detail: {
        designation: "Programmer",
        salary: 20000,
        emp_id: 2541
    }
}

function detail() {
    let textBox = document.getElementById("textBox");

    textBox.innerText = "Hi, My Name is " + details.firstName + " " + details.lastName + ", I live in " + details.city + " city," + " I am a " + details.emp_detail.designation + ", my salary is " + details.emp_detail.salary + " and employee id is " + details.emp_detail.emp_id + "."
}