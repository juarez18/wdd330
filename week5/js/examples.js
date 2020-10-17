function testAlert(){
    const a = 4;
    const b = 6;
    const c = a + b;
    alert(c);
    const d = c / 2;
    alert(d);
}

function testConsole(){
    for(i = 0; i < 10; i= i + 2){
        console.log(i);
    }

}

function testdebug(){
    debugger;
    const dice = Math.floor(Math.random() * 20) + 1;
    var message;
    debugger;
    if(dice < 10){
        message = "a low number of ";
        debugger;
    }
    else if(dice >= 10 && dice <= 19){
        message = "An okay roll of ";
        debugger;
    }

    else if(dice == 20){
        message = "A massive critical hit!";
        debugger;
    }

    else{
        debugger;
    }

    alert(message + dice + "!")
}
