var timeUp = 0;
const timer = document.getElementById("counter");
const minus = 'down';
const plus = 'up';

var myVar = setInterval(function() {
  timer.textContent = timeUp;
  timeUp++;
}, 1000)

let minusButton = document.getElementById('-');
minusButton.addEventListener("click", () =>  changeTimer(minus))

let plusButton = document.getElementById('+')
plusButton.addEventListener("click", () =>  changeTimer(plus))

function changeTimer(operation) {
  if (operation === "down") {
  timeUp = timeUp - 5;
  timer.textContent = timeUp;
  } else {
    timeUp = timeUp + 10;
    timer.textContent = timeUp;
  }
}

let heartButton = document.getElementById('<3');
heartButton.addEventListener("click", () => addLikes())
let arr = [];

function addLikes() {
  arr.push(timeUp);
  let filtArr = arr.filter(time => time === timeUp)
  let likeCount = filtArr.length
  console.log(arr);

  alert(`Number liked: ${timeUp}, No. of Times Liked: ${likeCount}`);
}

let pauseButton = document.getElementById('pause');
let paused = false;
pauseButton.addEventListener("click", () => disableButtons());
console.log(paused)
function disableButtons() {


  if(!paused) {
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;

    paused = true;

    return clearInterval(myVar);
  } else if (paused) {

    myVar = setInterval(function() {
      timer.textContent = timeUp;
      timeUp++;
    }, 1000)

    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;

    paused = false;

    return myVar;
  }
}

 let submitButton= document.getElementById("comment-form")
 submitButton.addEventListener("submit",generateComment);
function generateComment(event){
  event.preventDefault()
  let com = document.getElementById('comment_id').value;
  console.log(com)
  const p = document.createElement('p');
  p.className = "comment";
  p.innerText = com;
  let lis = document.getElementById("list")

  return lis.appendChild(p);
}
