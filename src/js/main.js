const button = document.querySelector(".btn");
const article = document.querySelector(".subscribe-newsletter");
const div = document.querySelector(".newsletter-box");
const form = document.querySelector("#form");

button.addEventListener("click", () => {
    article.style.display = "block";
    div.classList.add("hidden");
});

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const username = event.target.username.value;
    const email = event.target.email.value;

    

    console.log(username, email);
});


