document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelector(".cta-button").addEventListener("click", function () {
        alert("Thank you for joining Sehat Sangh!");
    });
});
