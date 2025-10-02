const quizQuestions = [
    {
        question: "1. Which concept is primarily focused on the relationship of correspondence between the Source Text (ST) and the Target Text (TT) as a textual result?",
        options: ["Adequacy", "Equivalence", "Adaptation", "Transposition"],
        answer: "Equivalence"
    },
    {
        question: "2. The concept of Adequacy in translation is most closely tied to which overriding factor?",
        options: ["Lexical density", "Grammatical accuracy", "The purpose or 'Skopos' of the translation act", "Word-for-word fidelity"],
        answer: "The purpose or 'Skopos' of the translation act"
    },
    {
        question: "3. Which theorist is credited with introducing the distinction between Formal Equivalence and Dynamic Equivalence?",
        options: ["J.C. Catford", "Werner Koller", "Eugene Nida", "Roman Jakobson"],
        answer: "Eugene Nida"
    },
    {
        question: "4. Nida's Dynamic Equivalence is primarily concerned with achieving:",
        options: ["Semantic fidelity to the source culture's linguistic structure.", "A maximum degree of stylistic similarity at the word level.", "An equivalent effect or response from the target audience.", "A literal rendering of all grammatical categories and forms."],
        answer: "An equivalent effect or response from the target audience."
    },
    {
        question: "5. Translating an idiom (e.g., 'kick the bucket') by finding a non-literal equivalent in the TT is a procedure known as:",
        options: ["Transposition", "Modulation", "Literal Translation", "Equivalence (Vinay and Darbelnet)"],
        answer: "Equivalence (Vinay and Darbelnet)"
    },
    {
        question: "6. Werner Koller's Denotative Equivalence focuses on the equivalence of:",
        options: ["The emotional impact on the reader.", "The norms of the target text's genre.", "The extralinguistic content (the factual meaning).", "The stylistic and lexical choices of the words."],
        answer: "The extralinguistic content (the factual meaning)."
    },
    {
        question: "7. A translator choosing a word with a neutral tone to match the author's original subtlety is an application of Koller's:",
        options: ["Denotative Equivalence", "Formal Equivalence", "Pragmatic Equivalence", "Connotative Equivalence"],
        answer: "Connotative Equivalence"
    },
    {
        question: "8. In the theory of equivalence, a Zero Equivalent refers to a situation where:",
        options: ["The translation is abandoned due to high difficulty.", "The target language has a single, constant equivalent for a word.", "A Source Language unit has no direct analogue in the Target Language.", "A phrase or concept is translated literally to preserve its foreignness."],
        answer: "A Source Language unit has no direct analogue in the Target Language."
    },
    {
        question: "9. Modifying a ST's sentence structure to conform to concise language expected in a TT financial report is guided by Koller's:",
        options: ["Formal Equivalence", "Pragmatic Equivalence", "Text-Normative Equivalence", "Denotative Equivalence"],
        answer: "Text-Normative Equivalence"
    },
    {
        question: "10. Translators often seek equivalence at the level of sense rather than image for proverbs. This is a key finding of which theorists?",
        options: ["Catford and Jakobson", "Reiss and Vermeer", "Koller and Newmark", "Vinay and Darbelnet"],
        answer: "Vinay and Darbelnet"
    },
    {
        question: "11. A translation that is equivalent (e.g., highly literal) is not necessarily:",
        options: ["Accurate", "Literal", "Free", "Adequate"],
        answer: "Adequate"
    },
    {
        question: "12. Requiring the target reader to recognize the linguistic structure of the original author is an orientation toward:",
        options: ["Moving the author to the reader.", "The principle of equivalent effect.", "A functional-pragmatic adequacy.", "A philological or source-text-oriented adequacy."],answer: "A philological or source-text-oriented adequacy."
    },
    {
        question: "13. Koller's Pragmatic Equivalence (or Nida's Dynamic Equivalence) is primarily focused on:",
        options: ["The aesthetic beauty of the source text.", "The length and volume of the target text.", "The consistency of terminology and style.", "The reception and communicative effect on the target audience."],
        answer: "The reception and communicative effect on the target audience."
    },
    {
        question: "14. Which is most likely to be an Absolute Equivalent (stable, context-independent correspondence)?",
        options: ["Translating the Spanish 'coche' as 'car' or 'coach'.", "Translating the idiom 'einen Kater haben' as 'to have a hangover'.", "Translating the term 'photosynthesis' in a scientific article.", "Translating a cultural 'realia' like the Russian 'banya' (sauna)."],
        answer: "Translating the term 'photosynthesis' in a scientific article."
    },
    {
        question: "15. If a client commissions a 'rough, word-for-word' translation to determine only the gist, then a highly literal translation is:",
        options: ["Inadequate, because it does not follow target language norms.", "Equivalent, because it adheres strictly to the source text form.", "Inadequate, as a literal translation can never be functional.", "Adequate, because it fulfills the client's specific communicative purpose (Skopos)."],
        answer: "Adequate, because it fulfills the client's specific communicative purpose (Skopos)."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizArea = document.getElementById('quiz-area');
const scoreArea = document.getElementById('score-area');
const finalScore = document.getElementById('score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreArea.classList.add('hidden');
    quizArea.classList.remove('hidden');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const qData = quizQuestions[currentQuestionIndex];
    
    // Create HTML for the current question
    quizArea.innerHTML = `
        <div id="question-text">${qData.question}</div>
        <div id="answers-container">
            ${qData.options.map((option, index) => 
                `<button class="answer-btn" data-answer="${option}" onclick="checkAnswer(this)">${option}</button>`
            ).join('')}
        </div>
    `;
}

function checkAnswer(selectedButton) {
    const userAnswer = selectedButton.getAttribute('data-answer');
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    const answerButtons = document.querySelectorAll('.answer-btn');

    // Disable all buttons immediately after selection
    answerButtons.forEach(btn => btn.disabled = true);

    if (userAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        // Highlight the correct answer
        answerButtons.forEach(btn => {
            if (btn.getAttribute('data-answer') === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    // Move to the next question after a brief delay
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500);
}

function showResults() {
    quizArea.classList.add('hidden');
    scoreArea.classList.remove('hidden');
    finalScore.textContent = score;
}

// Start the quiz when the script loads
startQuiz();