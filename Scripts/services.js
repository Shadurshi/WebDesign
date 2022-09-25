function validate() {
    var phoneInput = document.ownerDetailsForm.phone.value;
    var emailInput = document.ownerDetailsForm.email.value;
    if (emailInput.indexOf("@") <= 0) {
        document.getElementById("errorEmail").innerHTML = "Enter a valid Email";
    }

    if(phoneInput.length<10){
        document.getElementById("errorPhone").innerHTML=" Enter a Valid number";
        return false;
    } else {
        submitted();
    }
}


function submitted() {
    alert("Hi! "+ document.ownerDetailsForm.name.value + ", We will get back you soon");
}


function reset() {
    document.getElementById("name").innerHTML=" "
    document.getElementById("phone").innerHTML=" "
    document.getElementById("email").innerHTML=" "
}
