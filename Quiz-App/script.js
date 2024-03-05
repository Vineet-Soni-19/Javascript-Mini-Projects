const questions = [
    {
        question: "Which is the longest river on the earth",
        answers: ['Ganga', 'Nile', 'Bramhaputra', 'Indus'],
        correctAnswer: 'Nile'
    },
    {
        question: "Who won the ICC Cricket World Cup 2019",
        answers: ['India', 'Australia', 'England', 'New Zealand'],
        correctAnswer: 'England'
    },
    {
        question: "Which city is the capital of India",
        answers: ['Delhi', 'Kolkata', 'Mumbai', 'Chennai'],
        correctAnswer: 'Delhi'
    },
    {
        question: "Which country has the most population in the world",
        answers: ['India', 'China', 'Paksitan', 'USA'],
        correctAnswer: 'India'
    }
];


const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    displayQuestion();
}

const displayQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    
    for (let i = 0; i < 4; i++) {
        const button=document.createElement('button');
        button.innerHTML = currentQuestion.answers[i];
        button.classList.add('btn');
        answerButtons.appendChild(button);
        
        if(currentQuestion.answers[i]===currentQuestion.correctAnswer){
            // Set a custom property to mark the correct answer
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
    }
    
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect){
        score++;
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display='block';
}


function displayScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        displayQuestion();
    }
    else{
        displayScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})



startQuiz();