
// elements
var winsEl = document.querySelector('#wins');
var lossesEl = document.querySelector('#losses');
var timerEl = document.querySelector('#timer');
var startBtn = document.querySelector('#start');
var resetBtn = document.querySelector('#reset');
var wordEl = document.querySelector('#word');


// game state
var timerDefault = 2;
var timer = 0;
var wins = 0;
var losses = 0;



// functions
function startGame() {
    console.log('starting game...')
    startBtn.disabled = true;
    timer = timerDefault;
    renderTimer();
    startTimer();
}


function renderTimer (value) {
    timerEl.textContent = value ? value : timer;
}


function startTimer() {
    var countdownTimer = setInterval(function() {
        timer--;
        renderTimer();
        if(timer === 0) {
            clearInterval(countdownTimer);
            loseGame();
        }
    }, 1000);
}

function loseGame() {
    losses++;
    renderScores();
}

function renderScores() {
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
}

function resetScores() {
    wins = 0;
    losses = 0;
    renderScores();
}

function init() {
    console.log('initializing...');
    renderTimer(timerDefault);
    renderScores()
}

// event listeners
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetScores);

init();