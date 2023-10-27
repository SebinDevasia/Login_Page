let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let userName=id("userName"),
Email=id("Email"),
Password = id("Password"),
form = id("form"),
errorMsg = document.getElementsByClassName("error");
successIcon= classes("success-icon"),
failureIcon = classes("failure-icon")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    engine(userName, 0, "User Name cannot be blank");
    engine(Email, 1, "Email cannot be blank");
    engine(Password, 2, "Email cannot be blank");
}

)
let engine = (id, serial, message) => {
    
    if(id.value.trim(   ) === ''){
        errorMsg[serial].innerHTML=message;
        failureIcon[serial].style.opacity = "1"
        successIcon[serial].style.opacity="0"
    }else{
        errorMsg[serial].innerHTML=''
        successIcon[serial].style.opacity="1"
        failureIcon[serial].style.opacity = "0"
    }
}