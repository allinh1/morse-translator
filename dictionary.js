
export const alphabet = {  
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    " ":"/",
    "!":"-·-·--",
    ".":"·-·-·-",
    ",":"--··--"
  };


export const alphabetReverse = Object.entries(alphabet).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
})


// // Translate Object Example

// const translate = {
//   a: "c",
//   b: "z",
//   c: "r",
//   d: "a",
// };

// const reverse = Object.entries(translate).reduce((acc, [key, value]) => {
//   acc[value] = key;
//   return acc;
// }, {});

// // 0th: acc => {}
// // 1st: acc => { c: "a" }
// // 2nd: acc => { c: "a", z: "b" }
// // 3rd: acc => { c: "a", z: "b", r: "c" }
// // 4th: acc => { c: "a", z: "b", r: "c", a: "d" }

// console.log("Swapping keys and values", reverse);


