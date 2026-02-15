function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let target = document.querySelector(".color");
let button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  target.textContent = document.body.style.backgroundColor;
});
