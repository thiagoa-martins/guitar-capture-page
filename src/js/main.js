const button = document.querySelector(".btn");
const div = document.querySelector(".subscribe-newsletter");
const divNewsletterBox = document.querySelector(".newsletter-box");
const form = document.querySelector("#form");
const article = document.querySelector(".about-newsletter");
const fieldset = document.querySelector("#enter-data");
const divSuccess = document.querySelector(".message-success");
const inputs = document.querySelectorAll("input");

let hasError = false;

button.addEventListener("click", () => {
    div.style.display = "block";
    divNewsletterBox.classList.add("hidden");
});

const handleSubmit = event => {
    event.preventDefault();
    
    const inputName = event.target.username;
    const inputEmail = event.target.email;

    const usernameRegex = /^[a-zA-ZÀ-ú\ ]{4,20}$/;
    const usernameIsValid = usernameRegex.test(inputName.value);
    const emailRegex = /^(?=.*[\@])[a-zA-Z0-9\@]{10,256}$/;
    const emailIsValid = emailRegex.test(inputEmail.value);
    
    if (!usernameIsValid) {
        hasError = true;

        const label = event.target.username.nextElementSibling;
        label.textContent = `O nome de usuário deve ter somente letras e entre
        4 caracteres e 20 caracteres.`
        inputName.setAttribute("class", "error");
    } else {
        hasError = false;

        const label = event.target.username.nextElementSibling;
        label.textContent = "";
    }

    if (!emailIsValid) {
        hasError = true;

        const label = event.target.email.nextElementSibling;
        label.textContent = `O e-mail deve ser no formato
        'nomedoemail@dominio.com' e entre 10 e 256 caracteres.`;
        inputEmail.setAttribute("class", "error");
    } else {
        hasError = false;

        const label = event.target.email.nextElementSibling;
        label.textContent = "";
    }

    inputs.forEach(input => {
        if (input.classList.contains("error")) {
            console.log("yeh")
            hasError = true;
        }
    });

    if (!hasError) {
        inputName.value = "";
        inputEmail.value = "";

        fieldset.style.display = "none";
        divSuccess.style.display = "block";
    }
};

form.addEventListener("submit", handleSubmit);

article.addEventListener("click", event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ["newsletter-close", "about-newsletter-container"];
    const shouldCloseDiv = classNames.some(className =>
        className === classNameOfClickedElement);    

    if (shouldCloseDiv) {
        div.style.display = "none";
        divNewsletterBox.classList.remove("hidden");
        fieldset.style.display = "block";
        divSuccess.style.display = "none";
    }
});

form.username.addEventListener("keyup", event => {
    const inputName = event.target;
    const usernameRegex = /^[a-zA-ZÀ-ú\ ]{4,20}$/;
    const usernameIsValid = usernameRegex.test(inputName.value);
   
    if (!usernameIsValid) {
        hasError = true;

        const label = event.target.nextElementSibling;
        label.textContent = `O nome de usuário deve ter somente letras e entre
        4 caracteres e 20 caracteres.`
        inputName.setAttribute("class", "error");
        return;
    } 
        hasError = false;

        const label = event.target.nextElementSibling;
        label.textContent = "";
        inputName.setAttribute("class", "success");
});

form.email.addEventListener("keyup", event => {
    const inputEmail = event.target;
    
    const emailRegex = /^(?=.*[\@])[a-zA-Z0-9\@]{10,256}$/;
    const emailIsValid = emailRegex.test(inputEmail.value);

    if (!emailIsValid) {
        hasError = true;

        const label = event.target.nextElementSibling;
        label.textContent = `O e-mail deve ser no formato
        'nomedoemail@dominio.com' e entre 10 e 256 caracteres.`;
        inputEmail.setAttribute("class", "error");
        return;
    } 
        hasError = false;

        const label = event.target.nextElementSibling;
        label.textContent = "";
        inputEmail.setAttribute("class", "success");
});


