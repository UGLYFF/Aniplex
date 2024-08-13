document.getElementById('loginForm').addEventListener
('submit',function(event){
    event.preventDefault()
    const username = 'CASTRO';
    document.getElementById('username').value;
    const password = 'OGCASTRO';
    document.getElementById('password').value;

    console.log('Username:',username);
    console.log_('password:',Password);
    })

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        // Check if the username and password are correct
        if (username === 'CASTRO' && password === 'OGCASTRO') {
            // Redirect to the new page if the credentials are correct
            window.location.href = 'Homepage/Homepage.html'; // Replace 'welcome.html' with your desired page
        } else {
            // If credentials are incorrect, show an alert or message
            alert('Incorrect username or password.');
        }
    });body
    