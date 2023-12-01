document.getElementById("hamburger").addEventListener('click', function() {
    document.querySelector(".menu").classList.toggle("show");
})

const pinterest = document.querySelector(".pint");
const facebook = document.querySelector(".face");
const instagram = document.querySelector(".insta");
const snap = document.querySelector(".snap");


pinterest.addEventListener("mouseover", function() {
    pinterest.src = "../Images/Pinterest - Negative(1).png"
})

pinterest.addEventListener("mouseout", function() {
    pinterest.src = "../Images/Pinterest - Negative.png"
})

facebook.addEventListener("mouseover", function() {
    facebook.src = "../Images/Facebook - Negative(2).png"
})

facebook.addEventListener("mouseout", function() {
    facebook.src = "../Images/Facebook - Negative(1).png"
})

instagram.addEventListener("mouseover", function() {
    instagram.src = "../Images/Instagram - Negative(2).png"
})

instagram.addEventListener("mouseout", function() {
    instagram.src = "../Images/Instagram - Negative(1).png"
})

snap.addEventListener("mouseover", function() {
    snap.src = "../Images/Snapchat - Negative(2).png"
})

snap.addEventListener("mouseout", function() {
    snap.src = "../Images/Snapchat - Negative(1).png"
})


document.addEventListener("DOMContentLoaded", function () {
    var dropdownLinks = document.querySelectorAll(".dropdown > a");

    dropdownLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var dropdownMenu = this.nextElementSibling; 
            toggleDropdown(dropdownMenu);
            toggleIcon (this.querySelector("i"));
        });
    });
    
    function toggleDropdown(menu) {
        menu.classList.toggle("show"); 
    }

    function toggleIcon(icon) {
        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-angle-up");
    }
});