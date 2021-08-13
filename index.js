const difficultyRange = document.querySelector(".content-wrapper h3");
const selectedDifficulty = document.querySelector(".drop-down");
const inputField = document.querySelector("#guess");


function updateSelectedOption() {
  const currentInputOption = selectedDifficulty.value;

  switch (true) {
    case currentInputOption === "easy":
      difficultyRange.innerText = " 1 - 5 ";
      inputField.setAttribute("max", "5");

      break;

    case currentInputOption === "normal":
      difficultyRange.innerText = " 1 - 10 ";
      inputField.setAttribute("max", "10");
      break;

    case currentInputOption === "hard":
      difficultyRange.innerText = " 1 - 100 ";
      inputField.setAttribute("max", "100");
      break;

    case currentInputOption === "impossible":
      difficultyRange.innerText = " 1 - 1000 ";
      inputField.setAttribute("max", "1000");
      break;

    default:
      console.log("I love Grace");
      break;
    }
    console.log(inputField.getAttribute("max"));
}

inputField.addEventListener("input", () =>{
  if (inputField.value <= 0) {
      alert("Input cannot be less than or equal to zero!");
      inputField.value = "";
  }
  if (inputField.value > inputField.getAttribute("max")) {
      alert("Input cannot be bigger than the limit: " + inputField.getAttribute("max"));
      inputField.value = "";
  }
});