let bt = document.getElementById("button")

function randomcolor(){
    let val = "0123456789ABCDEF";
    let hash = "#"
    
    for(let i=0 ; i<6 ; i++){
        hash = hash+val[Math.floor(Math.random()*16)]
    }
    return hash;
}

function changecolor(){
    document.body.style.backgroundColor = randomcolor();

}

bt.addEventListener("click",changecolor);