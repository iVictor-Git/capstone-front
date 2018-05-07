export const fn = (array) => {
    let number = null;
    // go through each element
    console.log('fn', array[array.length - 1]);
    for (let i = 0; i < array.length - 1; i++) {
        if (array.includes(array[i] + 1)) continue;
        number = array[i] + 1;
        console.log(number);
    }
    return number;

    // return if not found
}