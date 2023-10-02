const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again')


const correctLetters = [];
const wrongLetters = [];
let selecetedWord = getRandomWord();


function getRandomWord() {
    const words = ["ankara","istanbul","adıyaman","manisa","bolu","erzincan","kırşehir","adana","antalya"];

    return words[Math.floor(Math.random() * words.length)];
}


function displayWord() {
    word_el.innerHTML = `
        ${selecetedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    
    if(w === selecetedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'You Win!'
    }
}

function updateWrongLetters() {
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length > 0? '<h3>Wrong Letters</h3>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if(index < errorCount) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });

    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        message_el.innerText = 'You Lose!'
    }
}

function displayMessage() {
    message.classList.add('show');

    setTimeout(function(){
        message.classList.remove('show');
    }, 2000);
}

playAgainBtn.addEventListener('click', function() {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selecetedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';
});

window.addEventListener('keydown', function(e) {
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 219 && e.keyCode <= 222) || e.keyCode === 191 || e.keyCode === 186) {
        const letter = e.key;
        if(selecetedWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }
            else {
                displayMessage();
            }
        }
        else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }
            else {
                displayMessage();
            }
        }
    }
});

displayWord();