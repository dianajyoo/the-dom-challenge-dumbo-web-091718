var timeUp = 0;
const counter = document.getElementById("counter");
const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');
const heartButton = document.getElementById('<3');
const pauseButton = document.getElementById('pause');
const commentForm = document.getElementById("comment-form");

let likesArr = [];
let likesCounter;
let paused = false;

// counter.textContent returns "0"
var myTimer = setInterval(function() { counter.textContent = timeUp; timeUp++; }, 1000);

minusButton.addEventListener("click", function(event) {
  event.preventDefault();

  timeUp--
});

plusButton.addEventListener("click", function(event) {
  event.preventDefault();

  timeUp++
});

heartButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (likesArr.includes(timeUp)) {
    likesCounter++
  } else {
    likesArr.push(timeUp);
    likesCounter = 1;
  }

  alert(`Number: ${timeUp}, Liked ${likesCounter} time(s)`);

});


pauseButton.addEventListener("click", function(event) {

  if (!paused) {
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;

    paused = true;

    return clearInterval(myTimer);

  } else if (paused) {

    myTimer = setInterval(function() { counter.textContent = timeUp; timeUp++; }, 1000);

    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;

    paused = false;

    return myTimer;
  }

});

commentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let comment = document.getElementById('comment_id').value;
  const p = document.createElement('p');

  p.className = "comment";
  p.innerText = comment;

  let lis = document.getElementById("list")

  return lis.appendChild(p);

});
