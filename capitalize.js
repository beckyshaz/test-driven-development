export  function capitalize(string) {

    if (!string) {
        return;
    }

    const slicedString = string.slice(1);

    return `${string.charAt(0).toUpperCase() + slicedString}`;
}


console.log(capitalize());