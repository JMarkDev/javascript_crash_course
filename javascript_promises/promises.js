/*  (fetch('https://jsonplaceholder.typicode.com/users/2')
    async/await is recomended
    we only need to write response.json if we taking to a backend
*/
document.getElementById('email').style.color = 'blue'
document.getElementById('name').style.color = 'red'
document.querySelector('.status').style.color = 'orange'


const emailRef = document.querySelector('.email');
const statusRef = document.querySelector('.status');

//  1. Then
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
})

//  2. Async/Await

async function main() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json();
    const nameRef = document.querySelector('.name');
    nameRef.innerHTML = data.name;

}

main()


// NEW PROMISE
/*
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}
*/
//  1. Method 1 using -> Then
// getSubscriptionStatus().then(response => console.log(response))

//  2. Method 2 using -> Async/Await use this instead
async function promiseFunc() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status;
}
// console.log(getSubscriptionStatus())
promiseFunc()


/*
    1. Create a function called 'getVideo'
    2. Accept a parameter called 'subscriptionStatus'
    3. Return a new Promise inside of the function that:
            - if "VIP" resolve("show video")
            - if "FREE" resolve("show trailer")
            -otherwise reject("no video")
    4.  console.log the result of getVideo(status) in main() 
*/

const videoRef = document.querySelector('.video')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

function getVideo(subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if(subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if(subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else{
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status;
    try{
        const result = await getVideo(status)
        videoRef.innerHTML = result;
    }
    catch (e){
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main();