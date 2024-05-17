function matchpassword(){
    var firstPass = document.f1.password.value;
    var secondPass = document.f1.password2.value;
    if(firstPass==secondPass){
        alert("your password is correct😊");
        return true;
    }
    else{
        alert("password must be same!!");
        return false;
    }
}