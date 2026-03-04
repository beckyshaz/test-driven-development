import { analyzeArray } from "./analyze-array.js";
/*const string = 321; 
const splitString = string.split("");
console.log(string.split(""));

const reversed = splitString.reverse();
console.log(reversed);


console.log(reversed.join(""));
*/
/*export const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: (a, b) => a - b,

    divide: (a, b) => a / b,

    multiply: (a, b) => a * b
}

//console.log(calculator.add(1));

const obj = analyzeArray([5]);

console.log(obj);

//console.log(-1 + -2 + 3 + -8);
*/


function caesarCipher(string, shift) {

    const splitedString = string.split("");
    console.log(splitedString);

    const alphabetArray = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]


    let newString = "";

    for (let i = 0; i < splitedString.length; i++) {
        const currentElementIndex = alphabetArray.indexOf(splitedString[i]);
        console.log(currentElementIndex);

        if (currentElementIndex !== -1) {
            const shiftIndex = (currentElementIndex + shift) % 26;
            console.log(shiftIndex);
            newString += alphabetArray[shiftIndex];
            console.log(newString);
        }
        
    }
    return newString;
    
}


console.log(caesarCipher("xyz", 3));

console.log(26 % 26);
console.log(27 % 26);
console.log(28 % 26);