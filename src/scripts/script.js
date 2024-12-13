var LeaderBoard = [];
var dificuldade = '';

function setName(){
    const username = document.getElementById("UserName").value;
    if(username == ''){
        document.getElementById("UserName").value = 'NoName';
    }
    document.getElementById("UserName").style.display = "none"
    document.getElementById("btnStart").style.display = "none";
}
function start() {
    nome = document.getElementById('UserName').value
    document.getElementById('UserName').value = ''
    document.getElementById("Start").style.display = "none";
    document.getElementById("Settings").style.display = "flex";

}

function SetDiff(diff) {

    dificuldade = diff;

    document.getElementById("Settings").style.display = "none";
    document.getElementById("leaderBoard").style.display = "none";

    if (diff == "easy") {
        document.getElementById("EasyDeck").style.display = "flex";
    } else if (diff == "normal") {
        document.getElementById("NormalDeck").style.display = "flex";
    } else if (diff == "hard") {
        document.getElementById("HardDeck").style.display = "flex";
    }

}

