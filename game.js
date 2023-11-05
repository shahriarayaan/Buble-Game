function makeBubble(){
    var buble = "";
for(var i=1; i<241; i=i+1){
   var rn= Math.floor(Math.random()*10);
   buble +=` <div class="buble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = buble
}
var timer = 60;
function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
             timer=timer-1;
             document.querySelector("#Timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").textContent = ` Game Over`;
        }
       
        
    }, 1000)
}
var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent = hitrn
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score
}
document.querySelector("#pbottom").addEventListener("click", function(dets){
    var clicked = (Number(dets.target.textContent))
    if(clicked === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    }

})

getNewHit()
runTimer()
makeBubble();