const button = document.querySelector(".btn");
const div = document.querySelector(".subscribe-newsletter");
const divNewsletterBox = document.querySelector(".newsletter-box");
const form = document.querySelector("#form");
const article = document.querySelector(".about-newsletter");

button.addEventListener("click", () => {
    div.style.display = "block";
    divNewsletterBox.classList.add("hidden");
});

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const username = event.target.username.value;
    const email = event.target.email.value;
});

article.addEventListener("click", event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ["newsletter-close", "about-newsletter-container"];
    const shouldCloseDiv = classNames.some(className =>
        className === classNameOfClickedElement);    

    if (shouldCloseDiv) {
        div.style.display = "none";
        divNewsletterBox.classList.remove("hidden");
    }
});



