/*
    Data types & Variables
    Conditionals
    Loops
    Functions
    Arrays
    Objects
    DOM
*/

// return first letter
console.log('Hello World' [0]); 


//Return last letter
let str = 'Hello Cute'
console.log(str[str.length - 1]);

let Celsius = 10;
let fahrenheit = Celsius * 1.8 + 32;

console.log(fahrenheit);

let firstName = false;
let lastName = false;

if (firstName === true){
    console.log("Josiel Mark")
} 
else if (firstName !== true){
    console.log("Josiel Mark is Cute!")
}
else {
    console.log("Seroy")
}

let cash = 100;
let price = 40;
let difference = cash - price;

if (cash > price) {
    console.log(`you paid extra amount, here's ${difference} have a nice day!`)
}
else if (cash === price){
    console.log("you paid exact amount")
}
else{
    console.log(`not enough money you still owe ${difference * -1} dollars`)
}

// ADVANCE JS

let val = ""

if (val){
    console.log("truthy value", !!val)
}
else {
    console.log(!!val)
}

let x = ""
let y = 0

if (x) {
  console.log("x is truthy")
} else {
  console.log("x is falsy")
}

if (y) {
  console.log("y is truthy")
} else {
  console.log("y is falsy")
}


// TERNARY OPERATORS
let hot = false;

hot ? console.log("weather is hot outside") : console.log("weather is cold")

let subscribed = false;
let loggedIn = true;

//no variable is assign because it's already assign upward
str = subscribed && loggedIn ? 'show the video' : 'hide the video'
console.log(str);

let cashh = 50;
let pricee = 40;
let isStoreOpen = true;

let paid = cashh >= pricee && isStoreOpen === true ? 'give receipt' : 'do not give receipt';
console.log(paid);

//VARIABLES


// let count = 1

// while (count <= 100) {
//   console.log(count)
//   count = count + 1;
// }//

for (let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} -> Frontend Simplefied`)
    }
    else if(i % 3 === 0){
        console.log(`${i} -> Frontend`)
    }
    else if(i % 5 === 0){
        console.log(`${i} -> Simplified`)
    } else{
        console.log(`${i} -> ${i}`)
    }
}

// PRINT EVERY CHARACTER
str = "Frontend Simplified"

for (let i = 0; i < str.length; i++){
    console.log(str[i])
}

// FUNCTION


//Function definition
function welcomeName(firstName, lastName) {
    console.log(`Welcome to FES  ${firstName} ${lastName}`)
}

// Call function
welcomeName('Josiel Mark', 'Seroy');


// (num1 and num2) -> are parameters this is when you define
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

//Argument -> When you call the function
console.log(sumOfTwoNumbers(10, 10))


//Create a function that convert Celsius to Fahrenheit

/*function convertCelciusToFahrenheit(celsius){
    return celsius * 1.8 + 32
}

console.log(convertCelciusToFahrenheit(0));
console.log(convertCelciusToFahrenheit(10));
console.log(convertCelciusToFahrenheit(30));
*/


//Create an arrow function that convert Celsius to Fahrenheit
const convertCelciusToFahrenheit = (celsius) => {
    return celsius* 1.8 + 32
}

console.log(convertCelciusToFahrenheit(0));
console.log(convertCelciusToFahrenheit(10));
console.log(convertCelciusToFahrenheit(30));


//ARRAYS
let arr = [20, 30, 40, 50, 100]

// First element of array
console.log(arr[0]);

//Last element of array
console.log(arr[arr.length - 1])

//Add element into end of array
arr.push(200)
console.log(arr)

//CALLBACK FUNCTION SYNTAX line 177
//CALLBACK SYNTAX-> (() => {})

/*remove () if  only one variable in line 176 = element
let newArr = arr.filter(element => {
        return element < 50;
})
*/

// if you have only one line of code inside of arrow function make it same in  line 176
let newArr = arr.filter(element => element < 50)

console.log(newArr);

/*
    Filter out all the 'Fail in an array
    ['A+, 'A', 'FAIL'] => ['A+', 'A']
    ['FAIL', 'FAIL', 'B'] => ['B']
    ['FAIL'] => []
*/
let grades_A = [
    'A+',
    'A',
    'FAIL'
]

let gradesArr_A = grades_A.filter(element => element !== 'FAIL')
console.log(gradesArr_A)


let grades_b = [
    'FAIL',
    'FAIL',
    'B'
]

let gradesArr_B = grades_b.filter(element => element !== 'FAIL')
console.log(gradesArr_B);

let fail = [
    'FAIL'
]

let gradesFail = fail.filter(element => element !== 'FAIL')
console.log(gradesFail)


//FOR LOOP
let grades = [
    '+A',
    'A',
    'FAIL'
]

for (let i = 0; i < grades.length; i++){
    console.log(grades[i])
}

/*

* Filter out all the 'FAIL' element in an array
* Without using the array.filter method

    Filter out all the 'Fail in an array
    ['A+, 'A', 'FAIL'] => ['A+', 'A']
    ['FAIL', 'FAIL', 'B'] => ['B']
    ['FAIL'] => []

*/

let grade = [
    '+A',
    'A',
    'FAIL'
]
// Create a new empty array called 'goodGrades'
let goodGrades = []

for (let i = 0; i < grade.length; i++) {
    if (grade[i] !== 'FAIL') {
        goodGrades.push(grade[i])
        }
    }

console.log(goodGrades)



let grades_B = [
    'FAIL',
    'FAIL',
    'B'
]

let goodGrades_b = []

for (let i = 0; i < grades_B.length; i++){
    if (grades_B[i] !== 'FAIL') {
        goodGrades_b.push(grades_B[i])
    }
}

console.log(goodGrades_b);

//MAP

let array = [1, 2, 3, 4]

//let newArray = array.map((element => 1 )) 
let newArray = array.map((element) => {
    return element
})

console.log(newArray)

// Turn each element in an array of dollars into centents
// Dollars to cent using map method
let dollars = [1, 5, 10, 3]

 let dollarsToCents = dollars.map((element) => element * 100)
/* 
    let dollarsToCents = dollars.map((element) => {
        return element * 100
}) 
*/

console.log(dollarsToCents);


let newDollars = [0, 10, 20]

let dollarsToCent = newDollars.map((element) => element * 100 )
/* 
    let dollarsToCent = newDollars.map((element) => {
         return element * 100
})
*/

console.log(dollarsToCent);



//  Dollars to cent using for loop
let dollar = [1, 5, 10, 3];

//  create new 'cents' array
let cents = [];

//  loop over every element in 'dollar
for (let i = 0; i < dollar.length; i++){
    cents.push(dollar[i] * 100)
}
//console.log cents
console.log(cents);



let dollarS = [0, 10, 20]

let cent = []

for (let i = 0; i < dollarS.length; i++) {
    cent.push(dollarS[i] * 100)
}

console.log(cent);


//  OBJECTS
//objects with array if you have multiple users

let user = {
    username: 'jmseroy',
    gmail: 'jmseroy@gmail.com',
    subscription: 'VIP',
    discord: 'Josiel Mark Cute',
    lesson: 1,
    lessonsCopleted: [0, 1]
}

console.log(user)
console.log(user.username);
console.log(user.lessonsCopleted[0])
console.log(user.lessonsCopleted.map(element => element * 2))


//OBJECTS WITH ARRAY

let users = [
    { 
        username: 'josielmark',
        firstName: 'Josiel Mark',
        email: 'jmseroy@gmail.com',
        password: 'PASSWORD',
        money: [1000, 5]
    },
    {
        username: 'mark',
        firstName: 'Cute',
        lastName: 'Seroy',
        email: 'jmseroy@gmail.com',
        password: 'PASSWORD',
        money: [10, 100]
    }
]

console.log(users[0].money.map(element => element * 5))

const login = (email, password) => {
    for (let i = 0; i < users.length; i++){
        if (users[i].email === email){
            console.log(users[i])
            if (users[i].password === password) {
                console.log("log in successfully! you're cute btw")
            }
            else{
                console.log("password incorrect")
            }
            return;
        }
    }
    console.log("could not find an email that matchers")
}

login("jmseroy@gmail.com", "PASSWORD")


/*

Create a register function that accepts:
- username 
- email
- password
- subscription
- discord
- lessonsCompleted

Inside your register function:
1. Create a user object
2. Push this user object onto the 'users' array
*/

function userRegister (user) {   
    users.push(user);
}

userRegister({
    username: 'josielmark', 
    email: 'jmseroy@gmail.com', 
    password: 'password', 
    subscription: 'VIP', 
    discordId: 'cute123', 
    lessonsCopleted: [0, 1]
    },
);
    
console.log(users)




// const registerUser = (username, email, password, subscription, discordId, lessonsCompleted) => {
//     for (let i = 0; i < userRegister.length; i++) {
//     }   
// }

// registerUser('hahahahha', 'heheheh')

//  DOM -> Document Object Model

//  First way of accesging an element
console.log(document.querySelector('h1'))

//  Second way of accessing an element
console.log(document.getElementById('title'))

//  Change HTML
document.querySelector(".title").innerHTML = "Josiel Mark Seroy Cute"

//Change CSS
document.querySelector(".title").style.fontSize = '40px'

// function changeTitleToRed () {
//     document.querySelector('.title').style.color = 'red'
// }


// dark-theme -> from css class 
function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}
