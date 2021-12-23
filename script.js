var startButton = document.getElementById("start-btn");
var questionArray = [
    {
        question: "1. A(n) __ is used to store data in single variable.", 
        option1: "a. Array",
        option2: "b. Console Log",
        option3: "c. Parenthesis",
        option4: "d. Index",
        correctanswer: "a"

    },
    {
        question: "2. What does the arithmetic operator % do?", 
        option1: "a. The world may never know",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "3. What does API stand for?", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "4. What is DOM or the Document Object Model?", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "5. What does the following code do? var studentName",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "6. A(n) __ is a set of methods, properties, events, and URLs that developers use to interact with components of a user's web browser.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "7. What does the following code do? Console.log (document.body.children[1])",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "8. Which is the correct syntax in java for grabbing a HTML element by an ID?", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: '9. True or False? You have to redeclare a variable each and any time you change its value.', 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: '10. What does the following example of code do?  var h4Els=document.querySelectorAll ("h4")',
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "11. ___ are reusable blocks of code that perform a specific task.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "12. How do you combine a message with a variable value?", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "13. What is the following code? 'Hi I'm Olivia' ",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "14. A keyup event is fired when___.",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "15. Event ____ is when you trigger an event from a child element, and have an ancestor catch it, optionally, with data.",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "16. What is an .addEventListener used for?",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "17. localStorage.getItem retrieves an item using a(n)___ that's defined by localStorage.setItem",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "18. In a comparison What does === mean?",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "19. True or False? JSON.stringify converts a JSON string into an object",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "20. Unlike JSON.parsel, JSON.stringify converts a(n) ___ into a(n)___",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
]
/*console.log (questionArray[0]);*/
console.log (questionArray[0].option1);
var currentQuestion= 0
var qustnEl = document.getElementById ("questions");
var timeEl = document.querySelector ("h3");
var minutesLeft= 30;

function setTime(){
    var timerInterval = setInterval(function(){
        minutesLeft--;
        timeEl.textContent= "Minutes left: " + minutesLeft;

        if (minutesLeft === 0){
            clearInterval (timerInterval);
            endQuiz();
        }
    }, 60000); //delay between intervals set to 1 minute. Timer doesn't show up until 1 minute has passed


    // if stmt for incorrect answer //
    //var selectedChoice === questionArray[option1, option2, option3, option4];
    //var correctEl = currentQuestion
   /* if (selectedChoice !== correctanswer) {
        alert ("incorrect choice, -5 seconds");
        minutesLeft= minutesLeft--
    }*/
    
}
//function to end quiz
function endQuiz() {
    timeEl.textContent="Quiz over";
    //prompt to input initials and save score
}

//Function to begin the quiz
function startquiz () {
    qustnEl.innerText=questionArray[currentQuestion].question;
    setTime();

    //repeat for other 4 buttons. chnge innertext to number
}
console.log(startquiz);
startButton.addEventListener("click", startquiz);
/*{event.stopPropagation()
    startquiz(); */
//start button should disapear after it's pressed and
// timer should begin counting down 

/*
console.log (optnEl)
console.log (optnButton)*/
//Varibales for answer choice buttons
var optn1Button= document.getElementById ("optn-a");
var optn2Button= document.getElementById ("optn-b");
var optn3Button= document.getElementById ("optn-c");
var optn4Button= document.getElementById ("optn-d");

//Function to chose an answer and go to next question
function finalAnswerA() {
    //optn1Button.number=questionArray[currentQuestion++].question
    qustnEl.innerText=questionArray[currentQuestion++].question
    //event.stopPropagation();
};
function finalAnswerB() {
    qustnEl.innerText=questionArray[currentQuestion++].question
    //event.stopPropagation();
};
function finalAnswerC() {
    qustnEl.innerText=questionArray[currentQuestion++].question
    //event.stopPropagation();
};
function finalAnswerD() {
    qustnEl.innerText=questionArray[currentQuestion++].question
    //event.stopPropagation();
};
console.log(optn1Button)
//console.log(finalAnswerA)
//add event listener for 4 buttons(m/c optns). when hit button chnge innertext -->currentquestn=current++
optn1Button.addEventListener ("click", finalAnswerA);
optn2Button.addEventListener ("click", finalAnswerB);
optn3Button.addEventListener ("click", finalAnswerC);
optn4Button.addEventListener ("click", finalAnswerD);
