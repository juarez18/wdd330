//Alot of establishing variables and the new arrays here that will be used through various code

const startBtn = document.getElementById("start-round");
const make = document.getElementById("made-putt");
const miss = document.getElementById("miss-putt");
let stats = document.getElementById("putting-stats-display");
let startRound = document.getElementById("start-round-menu");
let puttingMenu = document.getElementById("active-putting");
const endBtn = document.getElementById("end-round");
let current10 = document.getElementById("current10")
let last10 = document.getElementById("last10")
let lastRound = document.getElementById("lastround")
const resetBtn = document.getElementById("reset-rounds");

let putts10 = localStorage.getItem("10ft") ? JSON.parse(localStorage.getItem("10ft")) : []
localStorage.setItem('10ft' , JSON.stringify(putts10))

let putts20 = localStorage.getItem("20ft") ? JSON.parse(localStorage.getItem("20ft")) : []
localStorage.setItem('20ft' , JSON.stringify(putts20))

let putts30 = localStorage.getItem("30ft") ? JSON.parse(localStorage.getItem("30ft")) : []
localStorage.setItem('30ft' , JSON.stringify(putts30))

let puttsc2 = localStorage.getItem("c2") ? JSON.parse(localStorage.getItem("c2")) : []
localStorage.setItem('c2' , JSON.stringify(puttsc2))




let a = 0;
let b = 0;
let c = 0;

let currentPutt = document.getElementById("current");
let distance = document.getElementById("putting-distance").value;

//This changes the display when you hit start round
function changeDisplay() {
    stats.classList.toggle("hidden")
    startRound.classList.toggle("hidden")
    puttingMenu.classList.toggle("hidden")
    startRound.classList.toggle("start-round")
    puttingMenu.classList.toggle("putting-session")
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

resetBtn.onclick = function resetStorage() {
    localStorage.clear();
    putts10 = []
    putts20 = []
    putts30 = []
    puttsc2 = []
    lastRound.textContent = "Not Avaliable"
    calcStats()
    
}

//event listener for when you end the round early
endBtn.onclick = function endround() {
    lastRound.textContent = c + " out of " + a + " were made from " + distance + "!"
    changeDisplay()
    a = 0;
    c = 0;
    calcStats()
    current10.textContent = " "
    last10.textContent = " "
}

//This checks your round to end it automatically
function checkRound(current){
    let maxPutts = document.getElementById("putting-number").value
    if(current == maxPutts ){
        lastRound.textContent = c + " out of " + a + " were made from " + distance + "!"
        changeDisplay()
        c = 0;
        a = 0;
        calcStats()
        current10.textContent = " "
        last10.textContent = " "
    }

}

//this records your score when you make a putt
make.onclick = function madeputt() {
    if (distance == "10ft") {
        putts10[putts10.length] = 1;
        localStorage.setItem('10ft' , JSON.stringify(putts10));
        c++;
        a++;
        currentPutt.textContent = a;
    } else if (distance == "20ft") {
        putts20[putts20.length] = 1;
        localStorage.setItem('20ft' , JSON.stringify(putts20));
        a++;
        c++;
        currentPutt.textContent = a;
    } else if (distance == "30ft") {
        putts30[putts30.length] = 1;
        localStorage.setItem('30ft' , JSON.stringify(putts30));
        a++;
        c++;
        currentPutt.textContent = a;
    } else if (distance == "C2") {
        puttsc2[puttsc2.length] = 1;
        localStorage.setItem('c2' , JSON.stringify(puttsc2));
        a++;
        c++;
        currentPutt.textContent = a;
    }
    if(a % 10 != 0){
        b++;
        current10.textContent = b + " / 10";
    }
    else if(a % 10 == 0){
        b++
        last10.textContent = b + " / 10";
        b = 0;
        current10.textContent = b + " / 10";
    }
    checkRound(a)

}

//This records when you miss a putt
miss.onclick = function missputt() {
    if (distance == "10ft") {
        putts10[putts10.length] = 0;
        localStorage.setItem('10ft' , JSON.stringify(putts10));
        a++;
        currentPutt.textContent = a;
    } else if (distance == "20ft") {
        putts20[putts20.length] = 0;
        localStorage.setItem('20ft' , JSON.stringify(putts20));
        a++;
        currentPutt.textContent = a;
    } else if (distance == "30ft") {
        putts30[putts30.length] = 0;
        localStorage.setItem('20ft' , JSON.stringify(putts20));
        a++;
        currentPutt.textContent = a;
    } else if (distance == "C2") {
        puttsc2[puttsc2.length] = 0;
        localStorage.setItem('c2' , JSON.stringify(puttsc2));
        a++;
        currentPutt.textContent = a;
    }
    if(a % 10 == 0){
        last10.textContent = b + " / 10";
        b = 0;
        current10.textContent = b + " / 10";
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

calcStats()

