function getdata(getdataid, getnextdata){


    setTimeout(() => {
        console.log("data", getdataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}

//call back HELL
getdata(1, ()=>{
    getdata(2, ()=>{
        getdata(3, ()=>{
            getdata(4, ()=>{
                getdata(5);
            })
        });
    });
})