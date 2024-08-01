console.log('Harry');
// let box = document.getElementsByClassName("box")

// console.log(box)

// box[2].style.backgroundColor = "red"

//document.getElementById("color").style.backgroundColor = "yellow"

//document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})