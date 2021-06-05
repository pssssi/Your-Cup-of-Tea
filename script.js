let quiz = document.getElementById('quiz');
var askQuestion = document.getElementById("askQuestion");
var form = document.getElementById("form");
let submitBtn = document.getElementById('submitBtn'); 

// questions array
var questions = [
  {
    question: "Which of the following descriptions best describes you?",
    choices: ["I am easier to feel hot than others.", "I am easier to feel cold than others."],
    correct: 1
  },
  {
    question: "Which of the following descriptions best describes you?",
    choices: ["I often feel lack of energy", "I have oily skin and are prone to acnes.", "I have irregular menstruation.", ],
    correct: 1
  }
]; 


window.onload = beginQuiz;
function beginQuiz() {
  quiz.style.display = "block";
  showScore.style.display = "none";
  i = 0;
  score = 0;
  questionsCount = questions.length;
  answersCount = questions[i].choices.length;
 
  displayQMCount.innerHTML = questionsCount;

  getQAs();
}

// listen and do things when the button is clicked
submitBtn.addEventListener("click", function() {
  allRadios = document.getElementsByName("option");
  var isChecked = false;
  for (var j = 0; j < allRadios.length; j++) {
    if (allRadios[j].checked) {
      isChecked = true;
      checkedRadio = j;
      break;
    }
  } 
  
});

function deselectRadios() {
  allRadios = document.getElementsByName("option");
  for (var p = 0; p < allRadios.length; p++) {
    allRadios[p].checked = false;
  }
}

function getResults() {
  if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
    score++;
  
  }
}

