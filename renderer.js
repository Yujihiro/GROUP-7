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
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Here you would typically validate credentials
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Example: simple credential check (replace with your logic)
        if (username === 'admin' && password === 'password') {
            // Successful login
            // Option 1: Open a new tab
            window.open('dashboard.html', '_blank'); // Replace 'dashboard.html' with your target page

            // Option 2: Redirect to a new page in the same tab
            // window.location.href = 'dashboard.html'; // Uncomment to use this method

            // Optionally, clear the form or show a success message
            loginForm.reset();
        } else {
            // Show an error message if login fails
            document.getElementById('error-message').innerText = 'Invalid username or password.';
        }
    });

    // Add similar logic for signupForm if needed
});
