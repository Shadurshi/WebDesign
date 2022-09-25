let button = document.getElementById("d")

button.addEventListener("click", function () {
    window.location.href = "About_us.htm";
})

document.write("hello")


function validate() {
    if(document.myform.mobile.value.length!=10){
        document.getElementById("num").innerHTML=" Enter a Valid number"
        document.myform.mobile.foucs()
        return false
    }
}


function valEmail(emailInput){
    // var a = document.ownerDetailsForm.emailInput.value()
    if (emailInput.indexof("@")<=0) {
        // document.getElementById("emailInput").innerHTML = "Enter a valid Email"
        alert("enter valid")
        return false

    }

    validate()
}


function reset() {
    document.getElementById("message").innerHTML=" "
    document.getElementById("mobile").innerHTML=" "
    document.getElementById("name").innerHTML=" "

}


function submitted() {
    alert("Hi! "+ document.myform1.name.value + ", We will get back you soon")
}





