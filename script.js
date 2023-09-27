let initialTime = 60;
var score = 0;
var initialHit;

function makeBubble() {
  let clutter = " ";

  for (let i = 1; i <= 140; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function setTimer() {
  let timer = setInterval(() => {
    if (initialTime > 0) {
      initialTime--;
      document.getElementById("timer").textContent = initialTime;
    } else {
      clearInterval(timer);
      document.querySelector(".pbtm").innerHTML = `<div class="gameOver">
                <h1>GameOver</h1>
                <p>Score = ${score}</p>
        </div>`;
    }
  }, 1000);
}

function getNewHit() {
  initialHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = initialHit;
}

function incrementScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  clickedNum = Number(dets.target.textContent);
  if (clickedNum === initialHit) {
    incrementScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
setTimer();
makeBubble();
getNewHit();
