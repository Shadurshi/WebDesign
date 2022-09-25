function validate() {
    var phoneInput = document.ownerDetailsForm.phone.value;
    if(phoneInput.length<10){
        document.getElementById("errorPhone").innerHTML=" Enter a Valid number";
        document.ownerDetailsForm.phoneInput.focus();
        return false;
    }
}


function valEmail(){
    var emailInput = document.ownerDetailsForm.email.value;
    if (emailInput.indexOf("@") <= 0) {
        document.getElementById("errorEmail").innerHTML = "Enter a valid Email";
    }
    validate();
}



function reset() {
    document.getElementById("nameField").innerHTML=" "
    document.getElementById("phoneInput").innerHTML=" "
    document.getElementById("emailInput").innerHTML=" "

}


function submitted() {
    alert("Hi! "+ document.ownerDetailsForm.nameField.value + ", We will get back you soon");
}
