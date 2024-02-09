document.getElementById('loginToggle').addEventListener('click', function () {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginToggle').classList.add('active');
    document.getElementById('signupToggle').classList.remove('active');
});

document.getElementById('signupToggle').addEventListener('click', function () {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupToggle').classList.add('active');
    document.getElementById('loginToggle').classList.remove('active');
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add login functionality here
    displayMessage('Login successful!');
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add signup functionality here
    displayMessage('Signup successful!');
});

function displayMessage(message) {
    document.getElementById('message').innerText = message;
}
