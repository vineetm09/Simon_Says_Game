let gameSeq = [];
let useSeq = [];
let btns = ["yellow", "green", "red","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("started");

        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function useFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function levelup() {
    useSeq=[];
    level++;
    h2.innerText= `Level ${level}`

    let rndIdx = Math.floor(Math.random()*3);
    let rndColor = btns[rndIdx];
    let randBtn = document.querySelector(`.${rndColor}`);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(useSeq[idx]===gameSeq[idx]){
        if(useSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your score was <b> ${level} </b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}

function btnPress(){
    let btn = this;
    useFlash(btn);

    let userColor = btn.getAttribute("id");
    useSeq.push(userColor);
    checkAns(useSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    useSeq=[];
    level=0;
}
