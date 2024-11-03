document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validationMessage = validateInput(username, password);
    document.getElementById('message').textContent = validationMessage;
});
document.getElementById('resetPasswordButton').addEventListener('click', function() {
    document.getElementById('password').value = '';
    alert('Password reset successful. Please enter a new Password.');
    document.getElementById('message').textContent = 'Password reset.Enter a new Password';
});

function validateInput(username, password) {
    const passwordPattern = /^(?=.*[0-9]).{6,}$/;

    if (!usernamePattern.test(username)) {
        return "Invalid username. It must be 4-12 characters long and contain only letters and numbers";
    }

    if (!passwordPattern.test(password)) {
        return "Invalid password. It must contain numbers,alphabets and symbols";
    }

    return "Login Successful";

}