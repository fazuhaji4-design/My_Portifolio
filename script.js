window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  window.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    hero.classList.add("show");
  });

  function revealOnScroll() {
    const about = document.querySelector(".about");
    const windowHeight = window.innerHeight;
    const revealTop = about.getBoundingClientRect().top;
    const revealPoint = 100; // adjust if needed

    if (revealTop < windowHeight - revealPoint) {
      about.classList.add("show");
    }
  }

  window.addEventListener("scroll", revealOnScroll);

  
 
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop actual form submission

    // Simple alert
    alert("✅ Thank you! Your message has been sent successfully.");

    // Reset the form
    form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form submission

    // Show nice popup
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. I will get back to you soon.",
      confirmButtonColor: "#007bff"
    });

    // Reset form
    form.reset();
  });
});

