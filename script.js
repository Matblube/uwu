const messages = [
    "Segura?",
    "Segurísima?? 🙁",
    "No seas así 🥺",
    "Pookie porfis...",
    "Solo tienes que pensarlo mejor",
    "Si dices no, estaré triste...",
    "Muy triste...",
    "Muy muy muy muy triste...",
    "Bueno, dejaré de preguntar :(",
];

let posi=-1;

function handleNoClick(){
    const noButton=document.querySelector('.no-button');
    const yesButton=document.querySelector('.yes-button');
    posi++;
    if(posi>=messages.length){
        window.location.href = "no_page.html";
        return;
    }
    noButton.textContent=messages[posi];
    const currentSize=parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize=`${currentSize * 1.3}px`;
}

function handleReturnClick(){
    window.location.href="ask.html";
    posi=-1;
}

function handleYesClick(){
    window.location.href="yes_page.html";
}


let curr=0;
function handleOpenClick(){
    document.getElementById("open").checked = true;
    curr++;
    if(curr==2){
        window.location.href="ask.html";
    }
}

function handleShowOnClick(){
    document.getElementById("nose").style.opacity="100";
}