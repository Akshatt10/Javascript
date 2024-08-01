//The faulty calculator gives faulty value 10% of the times and the remaining time they give correct value
// We will take use of random() to generate values

let random = Math.random();
console.log(random)
let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter Second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}

else{
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)    
}