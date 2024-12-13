
const hardGrid = document.querySelector('.HardGrid');
const normalGrid = document.querySelector('.NormalGrid');
const easyGrid = document.querySelector('.EasyGrid');
const timer = document.querySelectorAll('.counter');
var scores = [];

var user,
    ponto = 0;

const elementsHard = [
    'air',
    'earth',
    'fire',
    'plasma',
    'water'
];
const elementsNormal = [
    'water',
    'earth',
    'fire'
];
const elementsEasy = [
    'fire',
    'water'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '',
    secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    const cards = document.querySelectorAll('.Card');
    if (dificuldade == 'hard') {
        if (disabledCards.length == 10) {

            setTimeout(() => {

                cards.forEach((card) => {
                    card.remove();
                })
                ponto += 1;
                loadGameHard();

            }, 500);


        }
    } else if (dificuldade == 'normal') {
        if (disabledCards.length == 6) {
            setTimeout(() => {

                cards.forEach((card) => {
                    card.remove();
                })

                loadGameNormal();
            }, 500)

        }
    } else if (dificuldade == 'easy') {
        if (disabledCards.length == 4) {
            setTimeout(() => {

                cards.forEach((card) => {
                    card.remove();
                })

                loadGameEasy();
            }, 500)
        }
    }

}

const checkCards = () => {
    const firstElement = firstCard.getAttribute("data-element");
    const secondElement = secondCard.getAttribute("data-element");

    if (firstElement === secondElement) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';
        if (dificuldade == "easy") {
            ponto += 1;
        } else if (dificuldade == "normal") {
            ponto += 2;
        } else if (dificuldade == "hard") {
            ponto += 3;
        }

        checkEndGame();

    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500)


    }
}



const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;


    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
}

const createCard = (element) => {

    const card = createElement('div', 'Card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('./src/scripts/image/${element}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    card.setAttribute('data-element', element);

    return card;
}
const loadGameHard = () => {

    const cards = document.querySelectorAll('.Card');
    const revCards = document.querySelectorAll('.reveal-card');
    const disaCards = document.querySelectorAll('.disabled-card');

    cards.forEach((card) => {
        card.remove();
    })
    revCards.forEach((card) => {
        card.remove();
    })
    disaCards.forEach((card) => {
        card.remove();
    })

    const duplicateElements = [...elementsHard, ...elementsHard];

    const shuffledElements = duplicateElements.sort(() => Math.random() - 0.5)

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        hardGrid.appendChild(card);

    });
}
const loadGameNormal = () => {

    const cards = document.querySelectorAll('.Card');
    const revCards = document.querySelectorAll('.reveal-card');
    const disaCards = document.querySelectorAll('.disabled-card');

    cards.forEach((card) => {
        card.remove();
    })
    revCards.forEach((card) => {
        card.remove();
    })
    disaCards.forEach((card) => {
        card.remove();
    })

    const duplicateElements = [...elementsNormal, ...elementsNormal];

    const shuffledElements = duplicateElements.sort(() => Math.random() - 0.5)

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        normalGrid.appendChild(card);

    });
}
const loadGameEasy = () => {

    const cards = document.querySelectorAll('.Card');
    const revCards = document.querySelectorAll('.reveal-card');
    const disaCards = document.querySelectorAll('.disabled-card');

    cards.forEach((card) => {
        card.remove();
    })
    revCards.forEach((card) => {
        card.remove();
    })
    disaCards.forEach((card) => {
        card.remove();
    })

    const duplicateElements = [...elementsEasy, ...elementsEasy];

    const shuffledElements = duplicateElements.sort(() => Math.random() - 0.5)

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        easyGrid.appendChild(card);

    });
}
const startTime = () => {
    const cards = document.querySelectorAll('.Card');
    const revCards = document.querySelectorAll('.reveal-card');
    const disaCards = document.querySelectorAll('.disabled-card');

    this.loop = setInterval(() => {

        var currenTime;

        timer.forEach((timer) => {

            currenTime = +timer.innerHTML;
            timer.innerHTML = currenTime + 1;

        })
        var tempo;
        if (dificuldade == "easy") {
            tempo = 30;
        } else if (dificuldade == "normal") {
            tempo = 20;
        } else if (dificuldade == "hard") {
            tempo = 20;
        }


        if (currenTime == tempo) {
            alert('fim de tempo')
            timer.forEach((timer) => {
                timer.innerHTML = 0;
            })
            clearInterval(this.loop)
            firstCard = '';
            secondCard = '';
            document.getElementById("Start").style.display = "flex"
            document.getElementById("UserName").style.display = "flex"
            document.getElementById("btnStart").style.display = "flex";
            document.getElementById("leaderBoard").style.display = "flex";
            document.getElementById("EasyDeck").style.display = "none";
            document.getElementById("NormalDeck").style.display = "none";
            document.getElementById("HardDeck").style.display = "none";

            scores = [
                ...scores,
                { nome: nome, pontuacao: ponto },
            ];

            ponto = 0;

            scores.sort((a, b) => b.pontuacao - a.pontuacao);

            document.getElementById('First').textContent = `${scores[0].nome}: ${scores[0].pontuacao}`;
            document.getElementById('Second').textContent = `${scores[1].nome}: ${scores[1].pontuacao}`;
            document.getElementById('Third').textContent = `${scores[2].nome}: ${scores[2].pontuacao}`;
            document.getElementById('Fourth').textContent = `${scores[3].nome}: ${scores[3].pontuacao}`;
            document.getElementById('Fifth').textContent = `${scores[4].nome}: ${scores[4].pontuacao}`;
            document.getElementById('Sixth').textContent = `${scores[5].nome}: ${scores[5].pontuacao}`;

        }

    }, 1000);

}


