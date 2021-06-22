import { alphabet, alphabetReverse, } from "./dictionary.js"

export const toMorse = (inputTextSplitLower) => {
    const translatedArray = inputTextSplitLower.map((key) => {
      if (key === " ") {
        return "  ";
      }
      return alphabet[key]
    })
    return translatedArray.join(' ')
    ;
  };
  
  
 export const toEnglish = (inputCode) => {
    const translateCode = inputCode.map((key) => {
      return alphabetReverse[key]
    });
    return translateCode.join('')
  }