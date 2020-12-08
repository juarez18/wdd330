//Alot of establishing variables and the new arrays here that will be used through various code

const startBtn = document.getElementById("start-round");
const make = document.getElementById("made-putt");
const miss = document.getElementById("miss-putt");
let stats = document.getElementById("putting-stats-display");
let startRound = document.getElementById("start-round-menu");
let puttingMenu = document.getElementById("active-putting");
let endBtn = document.getElementById("end-round");
let putts10 = [];
let putts20 = [];
let putts30 = [];
let puttsc2 = [];
let a = 0;
let currentPutt = document.getElementById("current");
let distance = document.getElementById("putting-distance").value;

//This changes the display when you hit start round
function changeDisplay() {
    stats.classList.toggle("hidden")
    startRound.classList.toggle("hidden")
    puttingMenu.classList.toggle("hidden")
}

//event listener for start round
startBtn.onclick = function startround() {
    changeDisplay()
    distance = document.getElementById("putting-distance").value;
    let number = document.getElementById("putting-number").value;
    let placeholder = document.getElementById("total-number");
    placeholder.textContent = number;
    currentPutt.textContent = a;

}

//event listener for when you end the round early
endBtn.onclick = function endround() {
    changeDisplay()
    a = 0;
    calcStats()
}

//This checks your round to end it automatically
function checkRound(current){
    let maxPutts = document.getElementById("putting-number").value
    if(current == maxPutts ){
        changeDisplay()
        a = 0;
        calcStats()
    }

}

//this records your score when you make a putt
make.onclick = function madeputt() {
    if (distance == "10ft") {
        putts10[putts10.length] = 1;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "20ft") {
        putts20[putts20.length] = 1;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "30ft") {
        putts30[putts30.length] = 1;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "circle2") {
        puttsc2[puttsc2.length] = 1;
        a++;
        currentPutt.textContent = a;
    }
    checkRound(a)
}

//This records when you miss a putt
miss.onclick = function missputt() {
    if (distance == "10ft") {
        putts10[putts10.length] = 0;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "20ft") {
        putts20[putts20.length] = 0;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "30ft") {
        putts30[putts30.length] = 0;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "circle2") {
        puttsc2[puttsc2.length] = 0;
        a++;
        currentPutt.textContent = a;
    }
    checkRound(a)
}

//this loops through the array to help calculate your makes
function getMakes(name) {
    let makes = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] == 1) {
            makes++;
        } else {

        }

    }
    return makes;
}

//This displays the stats to your home page
function displayStats(total, makes, statLocation){
    let stat = ((makes / total) * 100).toPrecision(3);
    if(total > 0){
        document.getElementById(statLocation).textContent = " " + stat + "%"
    }
    else{
        document.getElementById(statLocation).textContent = " No putts yet get out there!"
    }
}

//This function does the actual calculations of the stats
function calcStats() {
    let total10Putts = putts10.length;
    let total20Putts = putts20.length;
    let total30Putts = putts30.length;
    let totalC2Putts = puttsc2.length;
    let makes10putt = getMakes(putts10);
    let makes20putt = getMakes(putts20);
    let makes30putt = getMakes(putts30);
    let makesc2putt = getMakes(puttsc2);

    let totalPutts = total10Putts + total20Putts + total30Putts + totalC2Putts;
    let totalmakes = makes10putt + makes20putt + makes30putt + makesc2putt;

    displayStats(total10Putts, makes10putt, "10-percentage");
    displayStats(total20Putts, makes20putt, "20-percentage");
    displayStats(total30Putts, makes30putt, "30-percentage");
    displayStats(totalC2Putts, makesc2putt, "c2-percentage");
    displayStats(totalPutts, totalmakes, "total-percentage");
}