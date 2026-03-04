export function caesarCipher(string, shift) {

    //const splitedString = string.split("");
    //console.log(splitedString);

    const alphabetArray = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

    const upperAlphabetArray = ["A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    let newString = "";

    for (let i = 0; i < string.length; i++) {
        const currentString = string[i];
        
        if (currentString === currentString.toUpperCase()) {
            
            const currentElementIndex = upperAlphabetArray.indexOf(string[i]);
            console.log(currentElementIndex);
            
            if (currentElementIndex !== -1) {
                const shiftIndex = (currentElementIndex + shift) % 26;
                console.log(shiftIndex);
                newString += upperAlphabetArray[shiftIndex];
                console.log(newString);
            }else {
                newString += currentString;
            }
        }else if (currentString === currentString.toLowerCase()) {
            
            const currentElementIndex = alphabetArray.indexOf(string[i]);
            console.log(currentElementIndex);
            
            if (currentElementIndex !== -1) {
                const shiftIndex = (currentElementIndex + shift) % 26;
                console.log(shiftIndex);
                newString += alphabetArray[shiftIndex];
                console.log(newString);
            }else {
                newString += currentString;
            }
        }/*else {
            newString += currentString;
        }*/
    }
    return newString;
}