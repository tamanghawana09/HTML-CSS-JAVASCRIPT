function validate(){
    var email = document.getElementById("email").value;
    var regExp = /^([a-z A-Z 0-9 \._-]+)@([a-z 0-9]+.)([a-z]+.)([a-z]?)$/;
    if(regExp.test(email)){
        alert("Valid Email");
    }else{
        alert("Invalid Email");
        email.value =" ";
        return false;
    }
}