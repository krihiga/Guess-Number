// Selecting input box and paragraph 
var guessnumber = document.getElementById("guessnumber")
//var result = document.getElementById("result")
var btn = document.getElementById("btn")
var randomNumber = Math.floor(Math.random() * 10) + 1
//var Score = document.getElementById("Score")
const audio = document.querySelector("audio")
var totalscore = 10
function check() {
    var enterednumber = guessnumber.value
    if (randomNumber == enterednumber) {
        console.log("Right")
       // result.textContent = "Right"
        confetti()
        audio.play(); 
    }
    else {
        //console.log("Wrong")
       // result.textContent = "Wrong"
        Score.textContent = "Score:" + totalscore
        totalscore = totalscore - 1
    }

}