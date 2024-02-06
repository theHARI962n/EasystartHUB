function validateSignup() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDisplay = document.getElementById('errorDisplay');

    // Basic validation
    if (!fullName || !email || !password) {
        errorDisplay.textContent = 'Please fill out all fields.';
        return;
    }

    // Simulate storing user data in local storage
    const userData = {
        fullName,
        email,
        password,
    };

    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to a profile/setup page
    window.location.href = 'profile-setup.html';
}
