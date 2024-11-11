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
var p1 = new Promise((res, rej) => {
    console.log("Pending Promise");
});

//fulfilled promise
var p2 = new Promise((res, rej) => {
    console.log("Fulfilled Promise");
    res("Successful");
});

//rejected promise
var p3 = new Promise((res, rej) => {
    console.log("Rejected");
    rej("error resolving");
});

//Handling promises using .then() & .catch()
var p4 = new Promise((res, rej) => {
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

// Promise chaining

// var p1 = new Promise(function (res, rej) {
//     return res("Promise 1 resolved");
// });

// var p2 = p1.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("Promise 2 resolved");
//     });
// });

// var p3 = p2.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("Promise 3 resolved");
//     });
// });

// p3.then(function (data) {
//     console.log(data);
// });

// var p4 = new Promise((res, rej) => {
//     var success = false;
//     setTimeout(() => {
//         if (success) {
//             return res("Promise 4 resolved");
//         } else {
//             return rej("error occured while resolving promise");
//         }
//     }, 2000);
// });

// p4.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// function abcd() {
//     fetch(`https://randomuser.me/api/`)
//         .then(function (raw) {
//             return raw.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// }
// abcd();

// ASYNC AWAIT
function api() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("api data");
            res(200);
        }, 2000);
    });
}

async function getApi() {
    await api();
}

async function abcd2() {
    let raw = await fetch("https://randomuser.me/api/");
    let ans = await raw.json();
    console.log(ans);
}
setTimeout(() => {
    abcd2();
}, 3000);
