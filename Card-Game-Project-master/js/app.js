function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



let arr=[];
let counter=0;
let a= true;
let counter2=0;
let time=0;
let timerId=0;
let timerOut=true;

/*********************************************************/

const cards=document.querySelectorAll(".card")

for( let card of cards){
card.addEventListener("click",(event)=>{
    

    if (arr.length === 2){
        addOfMovi();
        counter++;
        if(timerOut){
            initClock();
          }

if(arr[0].firstElementChild.className===arr[1].firstElementChild.className)
{
    arr[0].classList.add("match");
    arr[1].classList.add("match");
    arr = [];  

}
else {
        
    removeCard(arr[0]);
    removeCard(arr[1]);
    arr = [];

}


        }
      
    event.target.classList.add("open")
    arr.push(event.target)
   

})
}




const addCard = (card) => {
    card.classList.add("open");
};
const removeCard = (clickTarget) => {
    clickTarget.classList.remove("open");
}


/************************************************** */

const initClock = ()=>{

    timerOut=false;
    timerId=setInterval(()=>{
time++;
timerCount();}


    ,1000);
};


/******************************************/

const timerCount = ()=>{
    const min=Math.floor(time/60);
    const sec=time%60;
    if(sec<10)
    {
        timer.innerHTML=`${min}:0${sec}`;
    }
    else{
    timer.innerHTML=`${min}:${sec}`;

}
};

/***************************************** */
const stopTimer = () => {
    timerOut = false;
    clearInterval(timerId);
    time = 0;
    timerCount();
};
/**************************************************** */
const addOfMovi = () => {
    counter2++;
    const moves = document.querySelector("#moves");

    console.log(`Moves:${counter2}`);
    moves.innerHTML = counter2;
};




















