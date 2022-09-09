const button = document.querySelector(".btn");
const div = document.querySelector(".subscribe-newsletter");
const divNewsletterBox = document.querySelector(".newsletter-box");
const form = document.querySelector("#form");
const article = document.querySelector(".about-newsletter");
const fieldset = document.querySelector("#enter-data");
const divSuccess = document.querySelector(".message-success");
const inputs = document.querySelectorAll("input");

let hasError = false;

button.focus();

const showSubscribeNewsletter = () => {
    div.style.display = "block";
    divNewsletterBox.classList.add("hidden");
};

const checkError = input => {
    if (input.classList.contains("error")) {
        hasError = true;
    }
}

const errorFeedback = (input, feedback) => {
    hasError = true;

    const label = input.nextElementSibling;
    label.textContent = feedback;
    input.setAttribute("class", "error");
    input.focus();
};

const successFeedback = input => {
    hasError = false;

    const label = input.nextElementSibling;
    label.textContent = "";
    input.setAttribute("class", "success");
};

const validateUsername = inputName => {
    const usernameRegex = /^[a-zA-ZÀ-ú\ ]{4,20}$/;
    const usernameIsValid = usernameRegex.test(inputName.value);

    if (!usernameIsValid) {
       errorFeedback(inputName, `O nome de usuário deve ter somente letras e estar entre
       4 e 20 caracteres.`);
    } else {
       successFeedback(inputName);
    }
};

const validateEmail = inputEmail => {
    const emailRegex = /^(?=.*[\@])[a-zA-Z0-9\@]{10,256}$/;
    const emailIsValid = emailRegex.test(inputEmail.value);
    
    if (!emailIsValid) {
        errorFeedback(inputEmail, `O e-mail deve ser no formato
        'nomedoemail@dominio.com' e estar entre 10 e 256 caracteres.`);
    } else {
        successFeedback(inputEmail);
    }
};

const clearInputs = event => {
    event.target.username.value = "";
    event.target.email.value = "";
};

const thankYouMessage = () => {
    fieldset.style.display = "none";
    divSuccess.style.display = "block";
};

const handleSubmit = event => {
    event.preventDefault();

    validateUsername(event.target.username);

    validateEmail(event.target.email);

    inputs.forEach(checkError);

    if (!hasError) {
        clearInputs(event);
        thankYouMessage();
        event.target.close.focus();
    }
};

const showNewsletterBox = () => {
    div.style.display = "none";
    divNewsletterBox.classList.remove("hidden");
    fieldset.style.display = "block";
    divSuccess.style.display = "none";
    button.focus();
};

const shouldCloseSubscribeNewsletter = event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ["newsletter-close", "about-newsletter-container"];
    const shouldCloseDiv = classNames.some(className =>
        className === classNameOfClickedElement);
        
        if (shouldCloseDiv) {
            showNewsletterBox(event);
        }
};

const handleUsernameKeyup = event => {
    validateUsername(event.target);
};

const handleEmailKeyup = event => {
    validateEmail(event.target);
};

button.addEventListener("click", showSubscribeNewsletter);
form.addEventListener("submit", handleSubmit);
article.addEventListener("click", shouldCloseSubscribeNewsletter);
form.username.addEventListener("keyup", handleUsernameKeyup);
form.email.addEventListener("keyup", handleEmailKeyup);


