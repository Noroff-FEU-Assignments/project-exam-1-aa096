document.getElementById("hamburger").addEventListener('click', function() {
    document.querySelector(".menu").classList.toggle("show");
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