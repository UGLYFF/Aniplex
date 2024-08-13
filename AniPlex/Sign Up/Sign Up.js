document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageDiv = document.getElementById("message");

    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match!";
        return;
    }

    // You can add additional validation here (e.g., minimum password length)

    // If validation passes
    messageDiv.style.color = "green";
    messageDiv.textContent = "Sign up successful!";
    
    // Here, you can send data to your server or process it further
    console.log("Username:", username);
    console.log("Email:", email);
});