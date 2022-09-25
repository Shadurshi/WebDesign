// const name = document.getElementById("nameField");
// const email = document.getElementById("emailInput");
// const phone = document.getElementById("phoneInput");
// const form = document.getElementById("ownerDetailsForm");




// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     checkInput();
// })


// function checkInput() {
//     const emailVal = email.value.trim()
//     const phoneVal = phone.value.trim()
//     const emailval = email.value.trim()


//     if(emailVal === ''){
//         setError(email,"Email canot be blank")
//     }

//     else if (!isEmail(emailVal)) {
//         setError(email,"Not a valid mail")
//     }

//     else{
//         setSuccess(mail)
//     }

// }


// function isEmail(email){
//     return "@"

// }

function validate() {
    alert("VAL");
    var phoneInput = document.getElementById("phoneInput");
    if(phoneInput.value.length<10){
        document.getElementById("errorPhone").innerHTML=" Enter a Valid number";
        document.ownerDetailsForm.phoneInput.focus();
        return false;
    }
}


function valEmail(){
    var emailInput = document.getElementById("emailInput").value;
    if (emailInput.indexOf("@") <= 0) {
        document.getElementById("errorEmail").innerHTML = "Enter a valid Email";
        // return false;
    }
    alert("GAIN");
    // validate();
    // return true;
}







function reset() {
    document.getElementById("nameField").innerHTML=" "
    document.getElementById("phoneInput").innerHTML=" "
    document.getElementById("emailInput").innerHTML=" "

}


function submitted() {
    alert("Hi! "+ document.ownerDetailsForm.nameField.value + ", We will get back you soon");
}
