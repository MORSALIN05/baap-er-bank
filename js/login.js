// step 1:
document.getElementById('btn-submit').addEventListener('click', function () {
    //step -2: get the email address inside the emaoil input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'index.html';
    }
    else {
        alert('invalid user');
    }

})
