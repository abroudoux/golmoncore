console.log("Javascript loaded");

let button = document.getElementById("button");
let image = document.getElementById("image");

button.addEventListener("click", () => {
  image.style.display = "block";
});
