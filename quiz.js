let innerCursor = document.querySelector(".inner-cursor");
let outerCursors = document.querySelector(".outer-cursor");

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursors.style.left = `${x}px`;
  outerCursors.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    innerCursor.classList.add('grow');
  });
});

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('userInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-items");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

  //QUIZ 
  const quizData = [
    {
      question: "What does HTML stand for?",
      a: "Hyper Text Markup Language",
      b: "High Technical Machine Language",
      c: "Hyperlinks and Text Markup",
      d: "Home Tool Markup Language",
      correct: "a",
    },
    {
      question: "Which one of the following is an opening tag?",
      a: "<-->",
      b: "//",
      c: ". .",
      d: "<>",
      correct: "d",
    },
    {
      question: "What is the smallest h tag?",
      a: "h6",
      b: "h9",
      c: "h1",
      d: "h3",
      correct: "a",
    },
    {
      question: "What is the largest h tag?",
      a: "h1",
      b: "h5",
      c: "h20",
      d: "header",
      correct: "a",
    },
    {
      question: "Which one of the following is valid?",
      a: "DOCTYPE HTML",
      b: "Hello, World!",
      c: "p36",
      d: "!DOCTYPE HTML",
      correct: "d",
    },
    {
      question: "Which one of the following characters is for a hyperlink?",
      a: "a",
      b: "img",
      c: "link",
      d: "title",
      correct: "a",
    }
  ];
  
  
  const quiz = document.getElementById("quiz");
  const countQuestion = document.getElementById("count-question");
  const totalNumberOfQuestion = document.getElementById("tol-num-que");
  const questionNumber = document.getElementById("question-number");
  const questionTitle = document.getElementById("question");
  const answerLabel = document.querySelectorAll(".answer-label");
  const nextQuestionbtn = document.getElementById("next-question-btn");
  const allInputs = document.querySelectorAll("input[type='radio']");
  const submitquiz = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  
  
  let currentQtn=0;
  let answered = 0;
  
  const loadQuiz = ()=>{
    countQuestion.innerHTML=`${currentQtn + 1}`;
    totalNumberOfQuestion.innerHTML=quizData.length;
    questionNumber.innerHTML=`${currentQtn + 1}`;
    questionTitle.innerHTML=quizData[currentQtn].question;
    answerLabel[0].innerHTML=quizData[currentQtn].a;
    answerLabel[1].innerHTML=quizData[currentQtn].b;
    answerLabel[2].innerHTML=quizData[currentQtn].c;
    answerLabel[3].innerHTML=quizData[currentQtn].d;

    reset();

    if(currentQtn ==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitquiz.style.display="block";
    }
  }
  const reset =()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })
  }

  nextQuestionbtn.addEventListener("click",()=>{
    let answer=getSelected();
    if(answer){
        if(answer===quizData[currentQtn].correct){
            answered++;
        }
        currentQtn++;
        if(currentQtn<quizData.length){
            loadQuiz();
        }
    }
  });

  submitquiz.addEventListener("click", ()=>{
    let answer =getSelected();
    if(answer === quizData[currentQtn].correct){
        answered++;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultEl.style.display="block";
        scoreEl.innerHTML=`Questions Answered Correctly ${answered} / ${quizData.length}`;
    }
  })

  const getSelected =()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if(allInputs.checked){
            answer = allInputs.value;
        }
    });
    return answer;
  }
  loadQuiz();
  
  
  
  
    
  
  
  
  
  
  
  
  