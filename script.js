const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const inputContainer = document.getElementById('input-container');
const animalInput = document.getElementById('animal-input');
const questionInput = document.getElementById('question-input');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const submitButton = document.getElementById('submit-btn');

const tree = {
    question: "Er karakteren en del af Hogwarts?",
    yes: {
        question: "Er karakteren elev på Hogwarts?",
        yes: {
            question: "Er karakteren en del af Gryffindor-huset?",
            yes: {
                question: "Er karakteren en af 'De Trevenner'?",
                yes: {
                    question: "Er karakteren Harry Potter?",
                    yes: null,
                    no: null
                },
                no: {
                    question: "Er karakteren Hermione Granger?",
                    yes: null,
                    no: null
                }
            },
            no: {
                question: "Er karakteren Ron Weasley?",
                yes: null,
                no: null
            }
        },
        no: {
            question: "Er karakteren en del af Slytherin-huset?",
            yes: {
                question: "Er karakteren Draco Malfoy?",
                yes: null,
                no: null
            },
            no: {
                question: "Er karakteren Severus Snape?",
                yes: null,
                no: null
            }
        }
    },
    no: {
        question: "Er karakteren en del af Ministeriet for Magi?",
        yes: {
            question: "Er karakteren en del af Weasley-familien?",
            yes: {
                question: "Er karakteren en af Weasley-søskende?",
                yes: {
                    question: "Er karakteren Fred Weasley?",
                    yes: null,
                    no: null
                },
                no: {
                    question: "Er karakteren Arthur Weasley?",
                    yes: null,
                    no: null
                }
            },
            no: {
                question: "Er karakteren Dolores Umbridge",
                yes: null,
                no: null
            }
        },
        no: {
            question: "Er karakteren en del af Dumbledore's Army?",
            yes: {
                question: "Er karakteren Luna Lovegood?",
                yes: null,
                no: null
            },
            no: {
                question: "Er karakteren Neville Longbottom?",
                yes: null,
                no: null
            }
        }
    }
};

let currentQuestion = ''; // Variabel til at holde det aktuelle spørgsmål
let currentNode = tree; // Initialiser currentNode til toppen af træet

// Vis spørgsmål på skærmen
function displayQuestion(question) {
    questionContainer.innerText = question;
}


// Vis svarmuligheder på skærmen
function displayAnswers() {
    answerButtons.style.display = 'block';
    inputContainer.style.display = 'none';
}

// Vis inputfelter til at tilføje nyt dyr og spørgsmål
function displayInputFields() {
    answerButtons.style.display = 'none';
    inputContainer.style.display = 'block';
}

// Lyt efter klik på Ja-knappen
yesButton.addEventListener('click', () => {
    handleAnswer('yes');
});

// Lyt efter klik på Nej-knappen
noButton.addEventListener('click', () => {
    handleAnswer('no');
});

// Lyt efter klik på Gem-knappen
submitButton.addEventListener('click', () => {
    const newAnimal = animalInput.value;
    const newQuestion = questionInput.value;
    currentNode.question = currentQuestion;
    currentNode.yes = { question: newQuestion, yes: { question: newAnimal, yes: null, no: null }, no: { question: currentQuestion, yes: null, no: null } };
    displayQuestion(currentQuestion);
    displayAnswers();
});

function handleAnswer(answer) {
    if (currentNode === null) {
        // Håndter logik for vundet
        console.log("Programmet har gættet korrekt og vundet!");
        alert("Jaaa, jeg har vundet! Tak for spillet!");
        resetGame();
        return;
    }

    if (answer === "yes") {
        // Gå til næste spørgsmål
        currentNode = currentNode.yes;
        if (currentNode) {
            displayQuestion(currentNode.question);
            displayAnswers();
        }
    } else {
        if (currentNode.no === null) {
            // Håndter logik for at computeren ikke kan gætte karakteren
            const character = prompt("Hvilken Harry Potter karakter var der tale om?");
            const newQuestion = prompt("Hvilket spørgsmål kunne stilles efter det sidste for at identificere karakteren korrekt?");
            
            // Opdater træet med det nye spørgsmål og svar
            currentNode.no = {
                question: newQuestion,
                yes: { question: character, yes: null, no: null },
                no: null
            };
            
            // Gå videre til det næste spørgsmål
            currentNode = null;
            
            resetGame();
        } else {
            // Gå til næste spørgsmål
            currentNode = currentNode.no;
            if (currentNode) {
                displayQuestion(currentNode.question);
                displayAnswers();
            }
        }
    }
}


// Funktion til at nulstille spillet
function resetGame() {
    currentNode = tree; // Nulstil til toppen af træet
    initGame(); // Initialisér spillet igen
    const continuePlaying = confirm("Vil du spille igen?");
    if (!continuePlaying) {
        alert("Tak for at have spillet!");
    }
}


// Funktion til at initialisere spillet
function initGame() {
    displayQuestion(currentNode.question);
}

// Initialisering af spillet
initGame();