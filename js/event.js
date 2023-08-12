// system 1
function  makeRed(){
    document.body.style.backgroundColor='red';
}


// system 2
// <button onclick="document.body.style.backgroundColor='yellow'">click yellow</button>


// system 3
const blueButton=document.getElementById('blue-button');
blueButton.onclick=makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';

}

// system 3 another

const purpleButton=document.getElementById('purple-button');
purpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';

}

// system 4
const pinkButton=document.getElementById('pink-button');
pinkButton.addEventListener('click',makePink)

function makePink(){
    document.body.style.backgroundColor='pink';
}

// system 4 another
const orangeButton=document.getElementById('orange-button');
orangeButton.addEventListener('click',function makeOrange(){
    document.body.style.backgroundColor='orange';
});

// system 4 final
document.getElementById('green-button').addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
})