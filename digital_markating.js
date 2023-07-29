
let counts = setInterval(updated);
let upto = 0;
function updated(){
let count= document.getElementById("count1");
count.innerHTML= ++upto;
if(upto === 1000){
    clearInterval(counts);
    }

let count2= document.getElementById("count2");
    count2.innerHTML= ++upto;
if(upto === 1000){
    clearInterval(counts);
    }

    let count3= document.getElementById("count3");
    count3.innerHTML= ++upto;
if(upto === 1000){
    clearInterval(counts);
    }

    let count4= document.getElementById("count4");
    count4.innerHTML= ++upto;
if(upto === 1000){
    clearInterval(counts);
    }
}

