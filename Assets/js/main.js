const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email;
  const emailValue = email.value;
  const emailSibling = email.nextElementSibling;

  const isValid = /[\w\d]+@\w+\.\w+/.test(emailValue);

  if (!isValid) {
    email.classList.add("error");
    emailSibling.innerHTML = "Please provide a valid email.";
    emailSibling.classList.add("error");
    return;
  }

  email.classList.remove("error");
  emailSibling.innerHTML = "";
  emailSibling.classList.remove("error");
});
