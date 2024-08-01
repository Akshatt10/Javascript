console.log("Loops")

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);    
} // FOR LOOP

let obj = {
    name: "Akshat",
    role: "SDE"
}
for (const key in obj) {
    const element =  obj[key];
    console.log(key,element)
        
    } // FORIN LOOP

for (const c of "Akshat") {
    console.log(c)
} //FOROF loop

let i = 5;
while (i<6) {
    console.log(i)
    i++;
    
}
