// detectamos media query con matchMedia
// console.log(window.matchMedia("(prefers-color-scheme: dark)"));
const checkbox = document.querySelector("#checkbox");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //   console.log("mero lek");
  checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function (event) {
  // console.log(this.checked);
  // if (this.checked) {
  //   document.body.classList.add("is-dark-mode");
  // } else {
  //   document.body.classList.remove("is-dark-mode");
  // }
  document.body.classList.toggle("is-dark-mode");
});
