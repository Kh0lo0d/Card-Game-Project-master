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

/************************************************************/

const MixOfCard = () => {
    const arayyOfCard = Array.from(document.querySelectorAll("#deck li"));
    const cr = shuffle(arayyOfCard);
    for (card of cr) {
        deck.appendChild(card);
    };
};
MixOfCard();

/*********************************************************************/

const closeCard = () => {
    const arr = document.querySelectorAll("#deck li");
    for (let card of arr) {
        card.className = "card";
    };
};

/***************************************************************************/
let arr=[];
let counter=0;
let a= true;

let time=0;
let timerId=0;
let timerOut=true;
let counter_heart=0;
let counter_movie=0;
let hearts=document.getElementById("heart").children;
let ListHeart=[];

const reset = document.querySelector("#reset");


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
   

   

    if( counter_movie ==8 )
  { 
      
        stopTimer();
        
   
let a=0;
        ListHeart=hearts[a].children
        ListHeart[0].classList.remove("bi-heart-fill")
         a++;
      
    }
    
    
  

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
const stopClock = () => {
    timerOut = false;
    clearInterval(timerId);
    time = 0;
    timerCount();
};
/**************************************************** */
const rest = () => {
    stopClock();
    timerOut = true;
    time = 0;
    timerCount();
   
   
};


const stopTimer = () => {
    clearInterval(timerId);
  };

/*********************************************/


const addOfMovi = () => {
    counter_movie++;
    const moves = document.querySelector("#moves");

    console.log(`Moves:${counter_movie}`);
    moves.innerHTML = counter_movie;
};

/************************************************* */


const RestOfHearts = () => {
    counter_heart = 0;
    const Hearts = document.querySelectorAll("#heart li");

    for (heart of heartsList) {
        heart.style.display="inline";
    
    };
};

const RestOfMovie = () => {
    counter_movie = 0;
    document.querySelectorAll("#moves").innerHTML = counter_movie;
}


restart.addEventListener("click", () => {
    rest();
    MixOfCard();
    closeCard();
    counter=0;
    arr=[];
    counter_movie=0;
    RestOfHearts();
    RestOfMovie();
    
})
















