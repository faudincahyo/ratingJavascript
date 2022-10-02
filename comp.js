// create variable
let btn1 = document.getElementById("btnRate1")
let btn2 = document.getElementById("btnRate2")
let btn3 = document.getElementById("btnRate3")
let btn4 = document.getElementById("btnRate4")
let btn5 = document.getElementById("btnRate5")
let cardBody = document.querySelector("#cardBody")
let rateEnd = document.querySelector(".rateEnd")
let cardContent = document.querySelector("#cardContent")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")
let p5 = document.querySelector(".p5")

// function when we click the rating
function click1(){
    btn1.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn2.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn3.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn4.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn5.style.backgroundColor = "hsl(213, 25%, 19%)"
    p1.style.display = "block"
    p2.style.display = "none"
    p3.style.display = "none"
    p4.style.display = "none"
    p5.style.display = "none"

    
}


function click2(){
    btn1.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn2.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn3.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn4.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn5.style.backgroundColor = "hsl(213, 25%, 19%)"
    p1.style.display = "none"
    p2.style.display = "block"
    p3.style.display = "none"
    p4.style.display = "none"
    p5.style.display = "none"
}
function click3(){
    btn1.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn2.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn3.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn4.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn5.style.backgroundColor = "hsl(213, 25%, 19%)"
    p1.style.display = "none"
    p2.style.display = "none"
    p3.style.display = "block"
    p4.style.display = "none"
    p5.style.display = "none"
}
function click4(){
    btn1.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn2.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn3.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn4.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn5.style.backgroundColor = "hsl(213, 25%, 19%)"
    p1.style.display = "none"
    p2.style.display = "none"
    p3.style.display = "none"
    p4.style.display = "block"
    p5.style.display = "none"
}
function click5(){
    btn1.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn2.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn3.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn4.style.backgroundColor = "hsl(213, 25%, 19%)"
    btn5.style.backgroundColor = "hsl(25, 97%, 53%)"
    p1.style.display = "none"
    p2.style.display = "none"
    p3.style.display = "none"
    p4.style.display = "none"
    p5.style.display = "block"
}

// function of button submit
function btnSub(){
    if(click1.call){
        cardContent.style.display = "none"
        cardBody.style.display = "none"
        rateEnd.style.display = "block"
        return click1;
    }
    else if(click2.call){
        cardContent.style.display = "none"
        cardBody.style.display = "none"
        rateEnd.style.display = "block"
        return click2;
    }
    else if(click3.call){
        cardContent.style.display = "none"
        cardBody.style.display = "none"
        rateEnd.style.display = "block"
        return click3;
    }
    else if(click4.call){
        cardContent.style.display = "none"
        cardBody.style.display = "none"
        rateEnd.style.display = "block"
        return click4;
    }
    else if(click5.call){
        cardContent.style.display = "none"
        cardBody.style.display = "none"
        rateEnd.style.display = "block"
        return click5;
    }
}

