// Login Or Register
const change_form = (b) =>{
    if(b === true){
        document.getElementById("login").style.transform = "translatey(0)"
        document.getElementById("log").classList.remove("log")
        document.getElementById("reg").classList.add("reg")
        regRotate()
    }
    else{
        document.getElementById("login").style.transform = "translatey(-355px)"
        document.getElementById("reg").classList.remove("reg")
        document.getElementById("log").classList.add("log")
        logRotate()
    }
}

function regRotate(){
    var input = document.getElementsByClassName("input");
    input[0].style.transform = "rotatey(360deg)";
    input[0].style.transition = "all 2s linear";
    input[1].style.transform = "rotatey(360deg)";
    input[1].style.transition = "all 2s linear";
    input[2].style.transform = "rotatey(360deg)";
    input[2].style.transition = "all 2s linear";
}

function logRotate(){
    var input = document.getElementsByClassName("input");
    input[3].style.transform = "rotatey(360deg)";
    input[3].style.transition = "all 2s linear";
    input[4].style.transform = "rotatey(360deg)";
    input[4].style.transition = "all 2s linear"; 
}

// Validation

// Register Form

class Formvalodator {
    constructor(myform) {
        this.__myForm = myform;
        this.submitHandler();
    }

    submitHandler(){
        this.__myForm.addEventListener("click", (event) => {
            event.preventDefault();
            var validationMessage = [];
            let formElements = this.__myForm.getElementsByTagName("input");
            for(let i=0; i<formElements.length; i++){
                const element = formElements[i];
                let elementValidations = element.dataset.validation;
                let elementLabel = element.dataset.label;
                if(elementValidations){
                    let elementValidationArray = elementValidations.split(" ");
                    for(let j=0; j<elementValidationArray.length; j++){
                        const func = elementValidationArray[j];
                        var message = this[func](element)
                        if(message.length > 0){
                            validationMessage.push(message)
                        }
                        
                        // if(elementLabel === "Username"){
                        //     document.getElementById("validate_uname").innerText = message
                        // }
                        // if(elementLabel === "Password"){
                        //     document.getElementById("validate_password").innerHTML += message + "<br>"
                        // }
                        // if(elementLabel === "Repeat password"){
                        //     document.getElementById("validate_repassword").innerHTML += message + "<br>"
                        // }
                    }
                }
            }

            var errorBox = document.getElementById("errorBox");
            errorBox.innerHTML = "";
            for(let i=0; i<validationMessage.length; i++){
                const message = validationMessage[i];
                let li = document.createElement("li");
                let txt = document.createTextNode(message);
                li.appendChild(txt);
                errorBox.appendChild(li)
            }

            if(errorBox === ""){
                this.submit()
            }
        });
    }

    

    notEmpty(element){
        let label = element.dataset.label;
        if(element.value === ""){
            return label + " " + "Field Cannot Be Empty";
        }
        return "";
    }

    // isEmail(element){
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    //     if(!re.test(element.value)){
    //         return "The Email Format Is Incorrect"
    //     }
    //     return " "
    // }

    isPassword(element){
        const re = new RegExp ("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
        if(!re.test(element.value)){
            return "The Password Format Is Invalid"
        }
        return ""
    }

    isMach(element){
        var Password = document.getElementById("pass").value;
        var rePassword = element.value;
        if(rePassword !== Password){
            return "The password Is Not Mach"
        }
        return ""
    }
}





var registerForm = document.getElementById("register_form");
new Formvalodator(registerForm);














// focusHandler(){
//     this.__myForm.addEventListener("focusout", (event) =>{

//         let datasetValidations = event.target.dataset.validation;
        
//         if(datasetValidations){
//             let validateArray = datasetValidations.split(" ");
//             for(let i=0; i<validateArray.length; i++){
//                 const func = validateArray[i];
//                 var message = this[func](event.target)
//                 if(event.target.dataset.label === "Username"){
//                     document.getElementById("validate_uname").innerText = message;                
//                 }else if(event.target.dataset.label === "Password"){
//                     document.getElementById("validate_password").innerHTML += message + "<br>";
//                 }else{
//                     document.getElementById("validate_repassword").innerHTML += message + "<br>";
//                 }
//             }
//         }
//     })
// }