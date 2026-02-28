export function analyzeArray(array) {
    //const obj = {};

    if (!Array.isArray(array)) {
        throw new Error("argument must be an array");
    }

    if (array.length === 0) {
        throw new Error("argument must be an array");

    }

    array.forEach((element) => {
        if (typeof element !== "number") {
            throw new Error("each argument of the array must be a number");


        }
    })

   const min = Math.min(...array);
   const max = Math.max(...array);
   const length = array.length;

    const total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const average = total / length;

    const obj = {
        average,
        min,
        max,
        length
    }

   return obj;

}