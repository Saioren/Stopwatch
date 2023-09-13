const multiply = (number1, number2)=>{console.log(number1 * number2)};
multiply(2, 2)
function countPositive (nums){
    let positiveNums = 0;
    nums.forEach((num)=>{
        if(num > 0){
positiveNums ++
        } 
    });
    return positiveNums;
}
console.log(countPositive([1, -1, 2, -2]))

function addNum(array, num){
    return array.map((value) => value + num);
}
console.log(addNum([1, 2, 3], 3));

function removeEgg(foods){
    let eggCount = 0;
    return foods.filter((food) => {
        if (food === 'egg' && eggCount < 2){
        eggCount++;
        return false;
        }
        return true;
    }
  );
}
console.log(removeEgg(['egg', 'ham', 'egg', 'egg', 'apple']));

let isCounting = false;
let timer = 1;
let intervalId;

function timerAdd(){
    if (!isCounting) {
      intervalId = setInterval(function() {
        document.querySelector('.js-timer-count').innerHTML = timer;
        timer++;
      }, 1000);
      isCounting = true;
     
    }
  
    return timer.toPrecision(3);
  };
  
  function timerStop(){
    if (isCounting === true){
      clearInterval(intervalId);
      isCounting = false;
    }
  }
  
 function timerReset(){
    document.querySelector('.js-timer-count').innerHTML = 0;
   timer = 1;
    
    
 }

document.querySelector('.js-start-button')
.addEventListener('click', ()=>{
timerAdd();
})

document.querySelector('.js-stop-button')
.addEventListener('click', ()=>{
timerStop();
})

document.querySelector('.js-reset-button')
.addEventListener('click', ()=>{
    timerReset();
})

let imageOne = document.querySelector('.image1');
let imageTwo = document.querySelector('.image2'); 
function compare (img1, img2){
    if (img1 === img2){
        console.log('theyre the same');
    } else {
        console.log('merp???')
    }
}

console.log(compare(imageOne, imageTwo));