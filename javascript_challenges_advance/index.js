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