let submitBtn = document.querySelector(".submitBtn");
let input = document.querySelector(".input");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = input.value;
  if (emailRegex.test(email)) {
    input.nextElementSibling.innerHTML = "";
  } else {
    input.nextElementSibling.innerHTML = "Oops! Please check your email";
  }
});
