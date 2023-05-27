var clearHighscore = document.getElementById('clearhs')

function showScores() {
   
    var savedScores = JSON.parse(window.localStorage.getItem('savedScores')) || [];
    
    if (savedScores === "") {
        var nuthin = document.createElement("p");
        nuthin.textContent = "No highscores yet!";
        return;
    }
        
   
    var newHighscore = [];
    for (let i = 0; i < savedScores.length; i++) {
        var newHighscore = document.createElement("ol");
        newHighscore.innerHTML = savedScores[i].initials + " : " + savedScores[i].score;

        var listHighscores = document.getElementById("highscores");
        listHighscores.appendChild(newHighscore);
    }
  };

function clearHighscores() {
    window.localStorage.removeItem('savedScores');
    window.location.reload();
}

clearHighscore.onclick = clearHighscores;

showScores();