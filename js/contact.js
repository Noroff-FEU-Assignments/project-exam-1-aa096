import { validateEmail, checkLength } from "./UI/validatorFuctions.js";

const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const nameError = document.getElementById("name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const subject = document.getElementById("subject");
const subError = document.getElementById("sub-error");
const message = document.getElementById("message");
const messageError = document.getElementById("mess-error");
const submit = document.querySelector(".sub-btn");

function validateForm (event) {
    event.preventDefault();

    if (checkLength(name.value, 4) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 14) === true) {
        subError.style.display = "none";
    } else {
        subError.style.display = "block";
    }

    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (checkLength(name.value, 4) && checkLength(subject.value, 14) && checkLength(message.value, 24) && validateEmail(email.value)) {
        form.action = "https://aashild-rasmussen.no/wp-comments-post.php";
        console.log("form validated");
    }
}


form.addEventListener("submit", validateForm);