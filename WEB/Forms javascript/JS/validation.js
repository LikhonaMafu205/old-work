// over here we are setting up a function listens for all the pages
// content to be loaded
document.addEventListener('DOMContentLoaded', function(){
    // we load in our form, and our error message
    const registrationForm = document.getElementById('registration');
    const errorMessage = document.getElementById('validationError');

    //now we tell it what we do when the form is submitted
    //we pass "event" through to the new function we're making
    // so that we can use some of its properties
    registrationForm.addEventListener('submit', function(event) {
        // this prevents the form from being submitted if there are errprs
        event.preventDefault();

        // weclear a;; of the erros first (in case they are submitting)
        //first we load the form elements
        const username = document.getElementById('username');
        const fullname = document.getElementById('fullname');
         const email = document.getElementById('email');
         const password = document.getElementById('password');

         // then we change them
         errorMessage.textContent = ""//blanking the erroe message
         username.style.borderColor = ""//removing colour
         fullname.style.borderColor = ""
        email.style.borderColor = ""
        password.style.borderColor = ""

        // we create a variable to hold whether the form submission is valid
        let valid = true;

        //we start by checking the username
        //if they've entered nothing intp the username box
        if(username.value.trim() === ""){
            //highlight the box red
           username.style.borderColor = "red";
           //update our error meaage
           errorMessage.textContent = "Username is required";
           // and set that the form is no longer valid
           valid = false;
           
        }else{
            //otherwise, highlight in green to show it is valid and good
            username.style.borderColor = "green";
        }
        if(fullname.value.trim() === ""){
            //highlight the box red
           fullname.style.borderColor = "red";
           //update our error meaage
           errorMessage.textContent = "Username is required";
           // and set that the form is no longer valid
           valid = false;

        }else{
            //otherwise, highlight in green to show it is valid and good
            fullname.style.borderColor = "green";
        }
        // getting the entered email address from the form field, and extracting where "@" and the last "." are
        enteredEmail = email.value.trim();
        positionOfAt = enteredEmail.indexOf('@');
        positionOfDot = enteredEmail.lastIndexOf('.');

        // first we are going to check if there is actually something entered
        if (enteredEmail === ""){
            email.style,borderColor = "red";
            errorMessage.textContent = "Email address is required!";
            valid = false;

            // checking whether there is an "@" and at least 1 "."
            //then making sure that "@" isn't the first character. "." isn't at the end
            // and then the last "." come after the "@"
        }else if(!enteredEmail.includes('@') || ! enteredEmail.includes('.')
        || positionOfAt < 1|| positionOfDot < positionOfAt ||positionOfDot >= enteredEmail.length){
        email.style.borderColor = "red";
        errorMessage.textContent = "Email address is not valid!";
        valid = false;

        }else{
            email.style.borderColor = "green";
        }

        // password validation
        if (password.value.trim() ==""){ 
        password.style.borderColor = "red"
        errorMessage.textContent = "Password is required!";
        valid = false;
        }else if (password.value.length < 6){
            password.style.borerColor = "red";
            errorMessage.textContent= "Password must be longer than 6 character!";
            valid = false;
        }else{
            password.style.borderColor = "green";
        }
        // if the user has passed all of the validation checks
        if (valid) {
            //let them know
            errorMessage.style.color = "green";
            errorMessage.textContent = "Form submitted successfully!";

            // and clear the form for the next entry
            registrationForm.request();

            //after waiting 2 seconds, reset colours and the error message
            setTimeout(() => {
                username.style.borderColor = "";
                fullname.style.borderColor = "";
                email.style.borderColor = "";
                password.style.borderColor = "";
                    errorMessage.style.borderColor = "";
                    errorMessage.textContent = ""; 
                
            }, 2000);
        }
    })
    

});

   
