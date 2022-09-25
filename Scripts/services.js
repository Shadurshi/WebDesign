const name = document.getElementById("nameField")
const email = document.getElementById("emailInput")
const phone = document.getElementById("phoneInput")
const form = document.getElementById("ownerDetailsForm")




form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInput();
})


function checkInput() {
    const emailVal = email.value.trim()
    const phoneVal = phone.value.trim()
    const emailval = email.value.trim()


    if(emailVal === ''){
        setError(email,"Email canot be blank")
    }

    else if (!isEmail(emailVal)) {
        setError(email,"Not a valid mail")
    }

    else{
        setSuccess(mail)
    }

}


function isEmail(email){
    return "@"

}

// function validate() {
//     if(document.ownerDetailsForm.phoneInput.value.length<10){
//         document.getElementById("phoneInput").innerHTML=" Enter a Valid number"
//         document.ownerDetailsForm.phoneInput.foucs()
//         return false
//     }
// }


// function valEmail(){
//     var emailInput = document.ownerDetailsForm.emailInput.value
//     if (emailInput.indexof("@")<=0) {
//         // document.getElementById("emailInput").innerHTML = "Enter a valid Email"
//         alert("fail")
//         return false

//     }

//     validate()
// }







function reset() {
    document.getElementById("nameField").innerHTML=" "
    document.getElementById("phoneInput").innerHTML=" "
    document.getElementById("emailInput").innerHTML=" "

}


// function submitted() {
//     alert("Hi! "+ document.ownerDetailsForm.nameField.value + ", We will get back you soon")
// }
