let body = document.body;
let darkThemeButton = document.getElementById('darkThemeButton');
let matrixThemeButton = document.getElementById('matrixThemeButton');
let restartButton = document.getElementById('restart');
const modal_container = document.getElementById('modal_container')

const themeChangeLimit = 5;
let themeChangeCounter = 0;

function darkMode(){
    if(themeChangeCounter == 5) {
        modal_container.classList.add('show');
    }
    body.classList.remove('matrix');
    body.classList.toggle('dark');
    themeChangeCounter += 1;
    console.log(themeChangeCounter)
    return false;
}

function matrixMode(){
    if(themeChangeCounter == 5) {
        modal_container.classList.add('show');
    }
    body.classList.remove('dark');
    body.classList.toggle('matrix');
    themeChangeCounter += 1;
    return false;
}

function onRestart(){
    modal_container.classList.remove('show');
    themeChangeCounter = 0;
}
