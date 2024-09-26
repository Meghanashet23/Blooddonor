// Event listener for form submission on the "Request Blood" page
document.getElementById('bloodRequestForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent page reload

    // Collect form data
    const name = document.getElementById('name').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const city = document.getElementById('city').value;

    // Basic validation
    if (name === "" || bloodGroup === "" || city === "") {
        alert("Please fill out all fields!");
        return;
    }

    // Display the request in an alert (or process the request in the backend)
    alert(`Blood request submitted!\nName: ${name}\nBlood Group: ${bloodGroup}\nCity: ${city}`);

    // Clear form fields after submission
    document.getElementById('bloodRequestForm').reset();
});

// Additional functionality to show a confirmation message for contact form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent default form submission

    // Collect contact form data (for the contact page)
    const contactName = document.getElementById('name').value;
    const contactEmail = document.getElementById('email').value;
    const contactMessage = document.getElementById('message').value;

    if (contactName === "" || contactEmail === "" || contactMessage === "") {
        alert("Please fill out all fields!");
        return;
    }

    alert(`Thank you for reaching out, ${contactName}. We will get back to you at ${contactEmail}.`);

    // Clear contact form fields after submission
    document.querySelector('form').reset();
});
