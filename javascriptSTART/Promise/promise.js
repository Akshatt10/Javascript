/*const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        //resolve("Sucess");
        reject("Error caught");

    });
}

let promise  = getPromise();
promise.then((res)=>{
    console.log("Promise fulfilled", res);
});

promise.catch((err)=>{
    console.log("Error occured", err);
})*/

function asyncfunction1() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("Success");
        }, 4000);
    })
}

function asyncfunction2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data2");
            resolve("Success");
        }, 4000);
    })
}

//Promise Chaining

console.log("Fetching data1....")
let p1 = asyncfunction1()
p1.then((res) => {
    console.log("Fetching data2...")
    let p2 = asyncfunction2();
    p2.then((res) => {
        
    })
    
})