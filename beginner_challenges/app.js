/*  ARROW FUNCTION
    = () => {
    }
*/
/*
    Return the Sum of Two Numbers
    Create a function that takes two arguments as functions and return their sum.
*/
const addRef = document.querySelector('.addition');

function addition(num1, num2) {
    const sum = num1 + num2
    addRef.innerHTML = sum; 
    return sum
}
console.log(addition(3, 2))


function negative_Add(num1, num2) {
    return num1 + num2
}

console.log(negative_Add(-3, -6))


function add(num1, num2) {
    return num1 + num2
}

console.log(add(7, 3));


// Create a function that converts hours into seconds

const hoursIntoSeconds = (hours) => {
    return hours * 60 * 60
}

console.log(hoursIntoSeconds(3));