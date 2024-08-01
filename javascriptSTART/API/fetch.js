const url = 'https://cat-fact.herokuapp.com/facts';
const bttn = document.querySelector("#btn")
const fact = document.querySelector("#Facts")


const getdata = async()=>{
    console.log("Getting data")
    let response = await fetch(url);
    console.log(response)
    let data = await response.json()
    fact.innerText = data[1].text;
};

bttn.addEventListener("click", getdata);