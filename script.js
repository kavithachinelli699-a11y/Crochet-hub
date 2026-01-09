document.getElementById("sizeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let size = document.getElementById("size").value;

    if (size === "") {
        alert("Please select a size");
        return;
    }

    alert("Size submitted successfully! 🎉");

    // if you really want to submit (for backend)
    this.submit();
});
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let product = document.getElementById("product").value;

    // Email pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone digits only (min 10)
    let phonePattern = /^[0-9]{10,}$/;

    if (name === "") {
        alert("Please enter your full name");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (digits only, min 10)");
        return;
    }

    if (product === "") {
        alert("Please select a product");
        return;
    }

    // If everything is valid
    alert("Form submitted successfully! 🎉");
    this.submit();
});

// -----------------------------------------


 
