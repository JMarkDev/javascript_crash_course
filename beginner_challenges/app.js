/*  ARROW FUNCTION
    = () => {
    }
*/

// && -> AND
// || -> OR
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

console.log(hoursIntoSeconds(1));


// Create a function that takes length and width of rectangle and return its perimeter
function calcPerimeter(length, width) {
    return 2 * length + 2 * width
}

console.log(calcPerimeter(2, 9))


//  Write a fucntion that takes the base and height of a triangle and return its aria

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log(calcTriangleArea(20, 30));

//  Write a function accepts a string and add's 'Frontend' onto end of it

function appendFrontend(apple) {
    return apple + "Frontend";
}

console.log(appendFrontend("Apple"))

//  Given two numbers, return true if the sum of both numbers is greated than 100
//  Otherwise, return false.

// automatic return boolean   
function sumGreaterThat100(num1, num2) {
    return num1 + num2 > 100;
}
console.log(sumGreaterThat100(50, 110))

// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns  false.

function lassThanOrEqualToZero(number) {
    return number <= 0;
}

console.log(lassThanOrEqualToZero(5));


// Given a boolean (true of false), return the opposite boolean

/*

function oppositeBoolean(boolean) {
    if (boolean === false){
        return true
    }
    else{
        return false
    }
}

*/

//  ! -> return opposite
function oppositeBoolean(boolean) {
    return !boolean
}
console.log(oppositeBoolean(true))


//Given any element, return true if it is not the number 0

/*
function isNotZero(elem) {
    if (elem !== 0) {
        return true
    }
    return false
}
*/
function isNotZero(elem) {
    return  elem !== 0
}
console.log(isNotZero(10))

// Calculate Remaider
function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(3, 2))


//  Given two numbers, return true if the number is odd 
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(5));

//  Create a function that takes a number argument and returns 1 if the number is even. If the number is odd return -1

function booleanInteger(num) {
/*    if(num % 2 === 0) {
        return 1
    }
    return -1
*/
// USING TERNARY OPERATOR
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(2))


/*
    Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' 
    and 'SUBSCRIBED' return true, otherwise return false.
*/

function isLoggedAndSubscribed(logged_in, subscribed) {
/*
    if (LOGGED_IN === 'LOGGED_IN' && SUBSCRIBED === 'SUBSCRIBED'){
        return true
    }
    return false
*/
// USING TERNARY OPERATOR
    // return logged_in === 'LOGGED_IN' && subscribed === 'SUBSCRIBED' ? true : false 

// RETURN BOOLEAN
    return logged_in === 'LOGGED_IN' && subscribed === 'SUBSCRIBED'
}

console.log(isLoggedAndSubscribed("LOGGED_IN", "SUBSCRIBED"));