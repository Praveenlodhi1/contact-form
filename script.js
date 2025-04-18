<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting immediately

      // Get form fields
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      let isValid = true;
      let errorMessage = "";

      // Simple validation
      if (name.value.trim() === "") {
        isValid = false;
        errorMessage += "Please enter your name.\n";
      }

      if (email.value.trim() === "") {
        isValid = false;
        errorMessage += "Please enter your email.\n";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
      }

      if (subject.value.trim() === "") {
        isValid = false;
        errorMessage += "Please enter a subject.\n";
      }

      if (message.value.trim() === "") {
        isValid = false;
        errorMessage += "Please enter a message.\n";
      }

      if (!isValid) {
        alert(errorMessage);
      } else {
        // If valid, you could send the form data via AJAX or allow submission
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  });
</script>
