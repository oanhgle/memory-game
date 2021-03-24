//Global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables
var clueHoldTime = 1000; //how long to hold each clue's  
var pattern = new Array();
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakeCounter = 0; 
//var timeLimit = 10;
var level = 0;
var span = document.querySelector('span');;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function startGame(){
   //Randomly generate the pattern
    for(var i = 0; i < 10; i++)
    {
      pattern[i] = getRandom(1,8);
    }
  
    //initialize game variables
    mistakeCounter = 0; 
    progress = 0;
    gamePlaying = true;
  
    //swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
    // var Countdown = setInterval(function(){
    // if(timeLimit <= 0)
    // {
    //   clearInterval(Countdown);
    //   document.getElementById("countdown").innerHTML = "Out of time";
    // } 
    // else 
    // {
    //   document.getElementById("countdown").innerHTML = timeLimit;
    // }
    // timeLimit -= 1;
    // }, 1000)
    span.textContent = ++level; //update level 1
    playClueSequence();
}

function stopGame(){
    //swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    window.location.reload(true);
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 700,
  7: 610,
  8: 810.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
//Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// // One-liner to resume playback when user interacted with the page.
// document.querySelector('button').addEventListener('click', function() {
//   if (context.state === 'suspended') 
//     context.resume();
// });

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0 ; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    //after each turn, the clue hold time will decrease -20
    clueHoldTime -= 20;
  }
}

//win/loss noti
function loseGame(){
  stopGame();
  alert("Game Over. You lost 😔");
  window.location.reload(true);
}
function winGame(){
  stopGame();
  alert("Game Over. You won 😊 ");
  window.location.reload(true);
}


//Handling guesses

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(pattern[guessCounter] == btn){
    
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1)
        winGame();
      else
      {
        //Pattern correct. Add next segment
        progress++;
        span.textContent = ++level; //update level
        playClueSequence();
      }
    }
    else
      guessCounter++;
  }
  
  else
  {
    if(mistakeCounter < 2)
    {
        alert("Wrong pattern. You have " + (3 - (mistakeCounter + 1)) + " attempts left");
        mistakeCounter++;
        guessCounter = 0;
    }
    else
      loseGame();
  }
}