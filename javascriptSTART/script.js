console.log("Hey there")

//var a = 5; // VAR is globally scoped 
let a = 5; // GLOBAL LET
//var b = 6;
let b = 6;
var c = "Akshat";

console.log(a+b)
console.log(typeof a, typeof b, typeof c)

{   
    let a = 55;
    console.log(a) // IN SCOPE LET 
}

console.log(a)

const a1 = 5; // const is used to not change the value of variable in further code


let x  = "akshat";
let y = 20;
let z = 4.5;
const p = true;
let q = undefined;
let r = null;   //typeof null object

console.log(typeof x,typeof y, typeof z, typeof p, typeof q, typeof r)
console.log( x, y, z,  p,  q,  r)

//OBJECT

let o = {
    "name":"Akshat",
    "job code": 5600

}
console.log(o)
o.salary = "10LPA";
console.log(o)