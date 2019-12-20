function changeTitle() {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Goodbye World";
}

let h1 = document.querySelector("h1");
h1.addEventListener("click", changeTitle);
