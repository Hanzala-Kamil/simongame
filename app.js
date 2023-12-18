let gameSeq = [];
let userSeq = [];

let stratGame = false;
let level = 0;
let colors = ["red", "blue", "yellow", "green"];

let h4 = document.querySelector("h4");
let butn = document.querySelector("button")

butn.addEventListener("click", function () {
  if (stratGame == false) {
    // console.log("game is start")
    stratGame = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("btn-flash");
  setTimeout(function () {
    btn.classList.remove("btn-flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;

  let renInd = Math.floor(Math.random() * 4);
  let renClr = colors[renInd];
  let renBtn = document.querySelector(`.${renClr}`);
  // console.log(renInd);
  // console.log(renClr);
  // console.log(renBtn);
  gameSeq.push(renClr);
  btnFlash(renBtn);
}

function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length === userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h4.innerHTML = `Game Over! <b>Your score is ${level}</b>  <br> Press Button to start the game.`;
    resetGame();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
  // console.log(btn);
  let btnidCheck = btn.getAttribute("id");
  userSeq.push(btnidCheck);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".child");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function resetGame() {
  stratGame = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
let hid = document.querySelector("#hide")
let t = document.querySelector(".text")
hid.addEventListener("click" , ()=>{
  t.classList.toggle("h-100")
})