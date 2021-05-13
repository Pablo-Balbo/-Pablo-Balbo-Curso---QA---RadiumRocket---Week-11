const email = document.getElementById('email'),
      password = document.getElementById('password');   
      form = document.querySelector('form'),
      submitForm = document.getElementById('form'),
      error = document.getElementById('error');

let flagEmail = flagPassword = true;

email.onblur = function(e){
    const emailConditions = new RegExp("^([\dA-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");
    if(emailConditions.test(email.value) === false){
        spanEmail.style.display = 'block';
        spanEmail.style.color = 'red';
        spanEmail.innerHTML = '<span>Enter a valid email</span>';
        flagFullName = false;
        e.preventDefault();
    } else {
        spanEmail.style.display = 'none';
        flagFullName = true;
    }
};

email.onfocus = function(e){
    if(spanEmail.style.display === 'block'){
        spanEmail.style.display = 'none';
    }
};

password.onblur = function(e){
    let passwordValue = password.value;
    const characters = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
    if(passwordValue.length < 8){
        spanPassword.style.display = 'block';
        spanPassword.style.color = 'red';
        spanPassword.innerHTML = '<span>Password must have at least 8 characters</span>';
        flagPassword = false;
        e.preventDefault();
    } else if(characters.test(passwordValue) === false){
        spanPassword.style.display = 'block';
        spanPassword.style.color = 'red';
        spanPassword.innerHTML = '<span>Enter a lowercase, an uppercase and a number</span>';
        flagPassword = false;
        e.preventDefault();
    } else {
        spanPassword.style.display = 'none';
        flagPassword = true;
    }
};

password.onfocus = function(e){
    if(spanPassword.style.display === 'block'){
        spanPassword.style.display = 'none';
    }
};

submitForm.onsubmit = function(e){
    e.preventDefault();
    if (flagEmail && flagPassword) {
        fetch(`http://localhost:4000/login`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        })
        .then (response => response.json())
        .then (info => {
            error.style.display = 'flex';
            error.style.fontSize = '20px';
            if (info.result === 'Successfull!') {            
                error.style.color = 'green';
                error.innerHTML = 'Login Success!';
            } else {
                error.style.color = 'red';
                error.innerHTML = 'Please, check your data';
            }
        })
        .catch(function(){
            console.log('Error trying to send the data')
        });
    } else {
        error.style.color = 'red';
        error.innerHTML = 'Please, enter a valid email and password';
    }
};