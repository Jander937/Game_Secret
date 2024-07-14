let numberSecret;
let attempts;
let listNumbersDrawn = [];
let numberMaximum = 10;

console.log(numberSecret);

console.log(numberSecret);

function attemptTextElement(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyOfUser(){
    let numberTheUser = parseInt(document.getElementById('priceUser').value);

    console.log(numberSecret);
    if(numberTheUser === numberSecret){
        attemptTextElement('p', `YOU WERE RIGHT A NUMBER IN ${attempts} ${(attempts === 1) ? 'TIME': 'TIMES'}`);
        document.getElementById('restart').removeAttribute('disabled')
    }else{
        if(numberTheUser > numberSecret){
            attemptTextElement('p', 'The number secret is minor');
        }else{
            attemptTextElement('p', 'The number secret is elderly');
        }
        attempts++;
        clearBox();
    }
    return;
}

function clearBox(){
    document.querySelector('#priceUser').value = '';
}

function conditionsInicials(){
    attemptTextElement('h1', 'Game of number secret');
    attemptTextElement('p', `indicates a number at 1 to ${numberMaximum}`)
    numberSecret = triggerNumberSecrect();
    attempts = 1;
}

function restartGame(){
    //clear box
    clearBox();
    //incate message of interval the number
    conditionsInicials();
    document.querySelector('#restart').setAttribute('disabled', 'true');

}

function triggerNumberSecrect(){
    let numberGenerated = Math.floor(Math.random()*numberMaximum)+1;

    console.log(numberGenerated);
    console.log(listNumbersDrawn);

    if(listNumbersDrawn.length == numberMaximum){
        attemptTextElement('p', 'All the numbers have already been drawn.');
    }else{

        if(listNumbersDrawn.includes(numberGenerated)){
            return triggerNumberSecrect();
        }else{
            listNumbersDrawn.push(numberGenerated);
            return numberGenerated;
        }
    }

   
}

conditionsInicials();