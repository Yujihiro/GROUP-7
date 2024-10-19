document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('signup-error-message');
    
    // Clear any previous error message
    errorMessage.textContent = '';

    // Basic validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Proceed with signup (e.g., send data to the server)
    console.log('Signup successful!', { username, email, password });
    // Add your logic here to handle the signup process, such as an API call.
});
document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

document.getElementById('loginBtn2').addEventListener('click', function() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Add your form submission logic here for login and signup
