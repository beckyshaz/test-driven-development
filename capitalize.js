export  function capitalize(string) {

    const slicedString = string.slice(1);

    return `${string.charAt(0).toUpperCase() + slicedString}`;
}