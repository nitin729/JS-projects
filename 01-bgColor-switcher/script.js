const buttons = document.querySelectorAll(".button");
const body = document.querySelector(".body");

buttons.forEach((button) => {
  button.style.background = button.id;
});

buttons.forEach((button) => {
  button.addEventListener("click", function changeBgColor() {
    body.style.background = button.id;
    console.log(button.id);
  });
});
