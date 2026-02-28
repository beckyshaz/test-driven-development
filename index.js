import { analyzeArray } from "./analyze-array.js";
/*const string = 321; 
const splitString = string.split("");
console.log(string.split(""));

const reversed = splitString.reverse();
console.log(reversed);


console.log(reversed.join(""));
*/
export const calculator = {
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

