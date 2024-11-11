// function greet() {
//     console.log("Hello");
// }

// //timeout examples
// setTimeout(greet, 2000); //2000ms = 2s
// setTimeout(() => {
//     console.log("This is a callback fn");
// }, 2000);

// //callback hell example
// function getData(id, nextFn) {
//     setTimeout(() => {
//         console.log("data " + id);
//         if (nextFn) {
//             nextFn();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("Fetching data 2...");
//     getData(2, () => {
//         console.log("Fetching data 3...");
//         getData(3, () => {
//             console.log("Fetching data 4...");
//             getData(4);
//         });
//     });
// });

//Promise examples
//pending promise
let p1 = new Promise((res, rej) => {
    console.log("Pending Promise");
});

//fulfilled promise
let p2 = new Promise((res, rej) => {
    console.log("Fulfilled Promise");
    res("Successful");
});

//rejected promise
let p3 = new Promise((res, rej) => {
    console.log("Rejected");
    rej("error resolving");
});

//handling promises using .then() & .catch()
let p4 = new Promise((res, rej) => {
    console.log("New promise");
    res("successful");
    // rej("rejected");
});
//works when promise is resolved
p4.then(() => {
    console.log("method resolved");
});
//works when promise is rejected
p4.catch(() => {
    console.log("method rejected");
});

// ASYNC AWAIT
async function abcd2() {
    let raw = await fetch("https://randomuser.me/api/");
    let ans = await raw.json();
    console.log(ans);
}
setTimeout(() => {
    abcd2();
}, 3000);
