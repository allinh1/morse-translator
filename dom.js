// when importing when do we need to use {} , when to use default , difference?
import { toMorse , toEnglish } from "./functions.js"
// object events - best one to pick? , 

// preventDefault() Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur


// submit vs click 
// const englishForm = document
const inputEnglish = document.getElementById("inputEnglish");
const inputMorse = document.getElementById("inputMorse");
const outputMorse = document.getElementById("outputMorse");
const outputEnglish = document.getElementById("outputEnglish");

// formEnglish.addEventListener("submit", (event) => {
//     event.preventDefault()

// })

translateEnglishButton.addEventListener("click", (event) => { // on click do the following
    event.preventDefault();
    const inputText = document.getElementById("inputBoxEnglish").value; // grab input
    console.log(inputText);
    const inputTextSplitLower = inputText.toLowerCase().split(""); // cant map over string.
    console.log(inputTextSplitLower);
    const translated = toMorse(inputTextSplitLower); // toMorse = translate/map function
    outputMorse.value = translated;
})


translateMorseButton.addEventListener("click", (event) => { // on click do the following
  event.preventDefault();
  const inputCode = document.getElementById("inputBoxMorse").value; // grab input from
  console.log(inputCode);
  const inputCodeArray = inputCode.split(" "); // split into array
  console.log(inputCodeArray);
  const translateToEnglish = toEnglish(inputCodeArray) // toEnglish is function to be run on the object array
  outputEnglish.value = translateToEnglish // 

})
