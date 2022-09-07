const button = document.querySelector(".btn");
const div = document.querySelector(".subscribe-newsletter");
const divNewsletterBox = document.querySelector(".newsletter-box");
const form = document.querySelector("#form");
const article = document.querySelector(".about-newsletter");
const fieldset = document.querySelector("#enter-data");
const divSuccess = document.querySelector(".message-success");

button.addEventListener("click", () => {
    div.style.display = "block";
    divNewsletterBox.classList.add("hidden");
});

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let hasError = false;
    const inputName = event.target.username;
    const inputEmail = event.target.email;

    const usernameRegex = /^[a-zA-Z ]{4,}$/;
    const usernameIsValid = usernameRegex.test(inputName.value);
    const emailRegex = /^[a-zA-Z0-9@.]{8,}$/;
    const emailIsValid = emailRegex.test(inputEmail.value);
    
    if (!usernameIsValid) {
        hasError = true;

        const label = event.target.username.nextElementSibling;
        label.textContent = `O nome de usuário deve ter somente letras e no
        mínimo 4 caracteres.`
    } else {
        hasError = false;

        const label = event.target.username.nextElementSibling;
        label.textContent = "";
    }

    if (!emailIsValid) {
        hasError = true;

        const label = event.target.email.nextElementSibling;
        label.textContent = `O e-mail deve ser no formato
        'nomedoemail@dominio.com' e com no mínimo 8 caracteres.`;
    } else {
        hasError = false;

        const label = event.target.email.nextElementSibling;
        label.textContent = "";
    }

    if (!hasError) {
        inputName.value = "";
        inputEmail.value = "";

        fieldset.style.display = "none";
        divSuccess.style.display = "block";
    }
});

article.addEventListener("click", event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ["newsletter-close", "about-newsletter-container"];
    const shouldCloseDiv = classNames.some(className =>
        className === classNameOfClickedElement);    

    if (shouldCloseDiv) {
        div.style.display = "none";
        divNewsletterBox.classList.remove("hidden");
        fieldset.style.display = "block";
    }
});





