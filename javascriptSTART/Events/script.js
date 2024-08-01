document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeit = e.target.parentNode;
        removeit.remove()
    }
    
})