


const promise = new Promise((resolve, reject) => {
    resolve(2333)
});

promise.then((res) => {
    console.log(res)
})

promise.catch((err) => {

})

const promise1 = new Promise((resolve, reject) => {
    reject(2333)
});

Promise.resolve(2333).then((res) => {
    console.log(res);
    return 233333;
}).then((res) => {
    console.log(res);
    return 23333333;
}).then((res) => {
    console.log(res);
    return 233333333333333;
}).catch((err) => {
    console.log(err.message)
})

