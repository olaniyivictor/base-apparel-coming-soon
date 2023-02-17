
var emailstate = false; 
const form =document.getElementById('form');
console.log(form);
const Email =document.getElementById('Email');
console.log(Email);
const imager=document.querySelector('.imager');
console.log(imager);
const div10 =document.querySelector('.div10');
console.log(div10);


//let's add an event listener to the form
form.addEventListener('submit',(event)=>{
    event.preventDefault();
   

    validateInputs();

})

//let add a seterror function

//regular expression for email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError =function(element,message){
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess =function(element){
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}
const validateInputs = function(){
    const EmailValue =Email.value.trim()
    if(EmailValue === '') {
        setError(Email, ' The input field is empty');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Please provide a valid email address');
    } else {
        setSuccess(Email);
    }

}
