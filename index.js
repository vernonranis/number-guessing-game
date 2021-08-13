const difficultyRange = document.querySelector(".content-wrapper h3");
const selectedDifficulty = document.querySelector(".drop-down");
const inputField = document.querySelector("#guess");
let secretNumber = Math.floor(Math.random()*10)+1;
// console.log(secretNumber);

function updateSelectedOption() {
  const currentInputOption = selectedDifficulty.value;

  switch (true) {
    case currentInputOption === "easy":
      difficultyRange.innerText = " 1 - 5 ";
      inputField.setAttribute("max", "5");
      secretNumber = Math.floor(Math.random()*5)+1;
      console.log(secretNumber);
      break;

    case currentInputOption === "normal":
      difficultyRange.innerText = " 1 - 10 ";
      inputField.setAttribute("max", "10");
      secretNumber = Math.floor(Math.random()*10)+1;
      console.log(secretNumber);
      break;

    case currentInputOption === "hard":
      difficultyRange.innerText = " 1 - 100 ";
      inputField.setAttribute("max", "100");
      secretNumber = Math.floor(Math.random()*100)+1;
      console.log(secretNumber);
      break;

    case currentInputOption === "impossible":
      difficultyRange.innerText = " 1 - 1000 ";
      inputField.setAttribute("max", "1000");
      secretNumber = Math.floor(Math.random()*1000)+1;
      console.log(secretNumber);
      break;

    default:
      console.log("I love Grace");
      break;
    }
    console.log(secretNumber);
    return(secretNumber);

}

inputField.addEventListener("input", () =>{
  const userInput = parseFloat(inputField.value);
  const maxUserInput = parseFloat(inputField.getAttribute("max"));

  if (userInput <= 0) {
      alert("Input cannot be less than or equal to zero!");
      inputField.value = "";
  }
  if (userInput > maxUserInput) {
      alert("Input cannot be bigger than the limit: " + maxUserInput);
      inputField.value = "";
  }
});

inputField.addEventListener("keypress", (e) =>{
  if (e.key === "Enter") {
    if (secretNumber === parseFloat(inputField.value)) {
      console.log("You got it!");
      document.querySelector(".modal").setAttribute("style", "display:flex");
      document.querySelectorAll(".modal-content")[1].classList.add("game-result");
    } else {
      console.log("wrong answer");
      document.querySelector(".modal").setAttribute("style", "display:flex");
      document.querySelectorAll(".modal-content")[0].classList.add("game-result");
    }
  }
});

document.querySelector(".try-again-btn").addEventListener("click", () =>{
  document.querySelector(".modal").setAttribute("style", "display:none");
  document.querySelectorAll(".modal-content")[0].classList.remove("game-result");
});