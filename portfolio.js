// ================= PORTFOLIO JAVASCRIPT =================

// Page loaded message
document.addEventListener("DOMContentLoaded", function () {

    console.log("Tech With Burhan Portfolio Loaded Successfully");

    // Project image click effect
    const projectImages = document.querySelectorAll(".project-image img");

    projectImages.forEach(function (image) {

        image.addEventListener("click", function () {

            image.classList.toggle("active-image");

        });

    });

});