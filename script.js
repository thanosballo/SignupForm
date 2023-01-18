
const conpass=document.querySelector("#con_password");
conpass.addEventListener("keyup",()=>{
    let pass=document.querySelector("#password").value;
    let conpassval=document.querySelector("#con_password").value;
    if (pass===conpassval){
        console.log("valid",pass,conpassval)
    } else {
        console.log("invalid",pass,conpassval)
    }
})
