function validateRegistration() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username.length < 9) {
        alert('Please enter a valid user name');
        alert('username lenth not more than 9 letters');
        return false;
    }
    if (password.length < 8) {
        alert('Please enter a valid password');
        alert('Password lenth not more than nine letters');
        return false;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    if (phonenumber.length > 10) {
        alert('Please enter a valid phonenumber');
        return false;
    }
    return true;
}
