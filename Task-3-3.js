<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #2c3e50; /* Background color */
            background-image: url('background.jpg'); /* Replace with your background image if needed */
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .signup-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 40px; /* Increased padding */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 400px; /* Increased width */
            text-align: center;
        }

        .signup-container h2 {
            margin-bottom: 20px;
        }

        .signup-container input {
            width: 100%;
            padding: 15px; /* Increased padding for inputs */
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .signup-container button {
            width: 100%;
            padding: 15px; /* Increased padding for button */
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            font-size: 18px; /* Increased font size */
            cursor: pointer;
        }

        .signup-container button:hover {
            background-color: #45a049;
        }

        .signup-container a {
            color: #007BFF;
            text-decoration: none;
        }

        .signup-container a:hover {
            text-decoration: underline;
        }

        .error {
            color: red;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form id="signupForm" enctype="multipart/form-data">
            <input type="text" id="username" name="username" placeholder="Username" required>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <input type="tel" id="phone" name="phone" placeholder="Phone" required>
            <input type="file" id="profilePicture" name="profilePicture" accept="image/*">
            <div class="error" id="error-message"></div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.html">Login</a></p>
    </div>

    <script>
        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var phone = document.getElementById('phone').value;
            var profilePicture = document.getElementById('profilePicture').files[0];
            var errorMessage = document.getElementById('error-message');

            if (username === "" || email === "" || password === "" || phone === "") {
                errorMessage.textContent = "All fields are required!";
            } else if (!validateEmail(email)) {
                errorMessage.textContent = "Invalid email format!";
            } else {
                alert("Sign up successful!");
                // Handle form submission, e.g., send data to the server
                // Example: console.log({ username, email, password, phone, profilePicture });
            }

            function validateEmail(email) {
                var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(String(email).toLowerCase());
            }
        });
    </script>
</body>
</html>
