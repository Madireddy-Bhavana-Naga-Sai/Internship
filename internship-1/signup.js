document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save the user details in localStorage (for simplicity)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful!');

    // Redirect to login page
    window.location.href = 'login.html';
});
