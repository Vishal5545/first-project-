let gameseq =[];
let userseq =[];

let started = false;
let level = 0;

let btns =["yellow","red","purple","green"]

let h2= document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is start");
        started =true;
        levelup()
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250)
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level-${level}`
    let randInx =Math.floor(Math.random()*3);
    let randcolor = btns[randInx];
    let randbtn =document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);

}
function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000)
        }
    }else{

        h2.innerHTML = `Game over! your score is <b>${level}</b> <br> Press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.background = "lightskyblue"
        },200)
        reset();
    }
}
function btnpress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1)
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq =[];
    userseq = [];
    level =0;
    
}
fun















