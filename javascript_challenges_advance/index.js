/*
    *Show rating
    Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.
*/

function showRating(rating) {
    let ratings = "";
    for(let i = 0; i < Math.floor(rating); i++) {
        ratings = ratings + "*"
        if (i !== rating - 1) {
            ratings = ratings + " "
        }
    }
    if(!Number.isInteger(rating)) {
        ratings = ratings + "."
    }
    return ratings;
}

console.log(showRating(5.5))

function showRatings(rating) {
    //  initialise an empty string
    let ratings = "";
    //  loop through the rounded down rating
    for(let i = 0; i < rating; i++) {
        ratings = ratings + "*"
    //  if its not the last iteration add a space
        if (i !== rating - 1) {
            ratings = ratings + " ";
        }
    }
    //  if the number is not an integer
        // add a full stop
    if (Number.isInteger(rating)) {
        ratings = ratings + ".";
    }
    return ratings;
}

console.log(showRatings(10));


/*
    * Sort by lowest to highest price
    * Given an array of numbers, return the prices sorted by low to high.
*/

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a -b );
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 111, 222]));


/*
    Sort by highest to lowest price
    Given an array of objects, return the prices sorted by high to low.
*/

function sortHighToLow(price) {
    return price.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 300 },
    { id: 3, price: 60 },
    { id: 4, price: 10 }
]));

//  PROMISES

// ASYNC AND AWAIT


async function fetchUser() {
    const res = await fetch 
    ('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();
    
    console.log(data);
}

fetchUser();


async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
     const data = await response.json();
     const nameRef = document.querySelector('#user');
     nameRef.innerHTML = data.name
 
 }
 
 main()


//======================================
async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId);

    console.log(posts);
}

postsByUser(4)

//=======================================================================================
async function incompleteTodos(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await promise.json();
    
    const incomplete = todos.filter(element => element.completed === false);

    console.log(incomplete);
}

incompleteTodos();


//  First six incomplete task
// using .slice(0, 6)

async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await promise.json();
    
    const incompleteTodos = todos.filter(elem => !elem.completed).slice(0, 6);
/*
    The expression !elem.completed inside the arrow function checks if the completed property of the current elem is false.
*/
    console.log(incompleteTodos);
}

firstSixIncomplete(6);
