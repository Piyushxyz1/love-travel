// JavaScript for form validation

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('destinationError').innerText = '';
    document.getElementById('departureError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Validate name
    let name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate email
    let email = document.getElementById('email').value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate destination
    let destination = document.getElementById('destination').value;
    if (destination === "") {
        document.getElementById('destinationError').innerText = 'Destination is required.';
        isValid = false;
    }

    // Validate departure date
    let departure = document.getElementById('departure').value;
    if (departure === "") {
        document.getElementById('departureError').innerText = 'Departure date is required.';
        isValid = false;
    }

    // Validate message
    let message = document.getElementById('message').value;
    if (message === "") {
        document.getElementById('messageError').innerText = 'Message is required.';
        isValid = false;
    }

    return isValid;
}
