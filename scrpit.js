function submit() {
  const input = document.querySelector("#input");
  if (input.value === "") {
    const error = document.querySelector(".error");
    error.style.display = "flex";
    input.style.border = "0.5px solid red";
  } else {
    console.log(input.value);
  }
}
