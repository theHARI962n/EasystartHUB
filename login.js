// login.js

function validateLogin() {
  // Get values from the form
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate email and password (you can add more validation if needed)
  if (email === '' || password === '') {
      displayError('Please enter both email and password.');
  } else {
      // Assuming successful login for the example
      // You can replace this with your actual login logic
      alert('Login successful! Redirecting...');
      // Redirect to a new page or perform other actions upon successful login
  }
}

function displayError(message) {
  var errorDisplay = document.getElementById('errorDisplay');
  errorDisplay.innerText = message;
}
