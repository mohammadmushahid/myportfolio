document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("HCz4t8YIwIVX5MFuG"); // Replace with your EmailJS Public Key

    document.getElementById("emailForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "All fields are required!",
            });
            return;
        }

        // EmailJS parameters
        const emailParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_0c1pfed", "template_nx36d3s", emailParams)
            .then(function (response) {
                console.log("Email sent successfully", response);
                Swal.fire({
                    icon: "success",
                    title: "Sent!",
                    text: "Your email has been sent successfully.",
                });

                // Clear form fields
                document.getElementById("emailForm").reset();
            })
            .catch(function (error) {
                console.error("Email failed to send", error);
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Failed to send email. Please try again later.",
                });
            });
    });
});











// 76BC1CB7D39DD9C95B664B26C49D6747897B