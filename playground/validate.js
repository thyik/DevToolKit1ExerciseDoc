function checkForm(form){
    console.log("checkForm");
    alert("chckForm");
    // check non-empty
    if (form.username.value == ""){
        form.username.focus();
        return false;
    }
    re=/^\w+$/;  // \w is shorthand for any letter, number or the underscore character
    if (!re.test(form.username.value)){
        alert("Error: Username must contain only letters, numbers and underscare!");
        form.username.focus();
        return false;
    }
    alert("confirm");
    // confirm password
    if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value){
        if (!checkPassword(form.pwd1.value)){
            alert("Invalid Password");
            form.pwd1.focus();
            return false;
        }
        // pass
    }
    else {
        alert("Error: Password mismatch");
        form.pwd1.focus();
        return false;
    }
    //pass
    alert("pass");
    return true;

}

function checkPassword(value)
{
    return false;
}