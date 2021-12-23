var startButton = document.getElementById("start-btn");
var questionArray = [
    {
        question: "Question 1.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 2.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 3.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 4.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 5.",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 6.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 7.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 8.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 9.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 10.",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 11.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 12.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 13.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 14.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 15.",
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 16.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 17.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 18.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 19.", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "Question 20.",
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
var timeEl = document.querySelector (".time");
var minutesLeft= 22;
var timerInterval = setInterval(function(){
    minutesLeft--;
    timeEl.textContent= "minutes left: " + minutesLeft 
})

function startquiz () {
    qustnEl.innerText=questionArray[currentQuestion].question;
    qustnEl.textContent=" A(n)____ is used to store data in single variable.";
    //repeat for other 4 buttons. chnge innertext to number
}
//add event listener for 4 buttons(m/c optns). when hit button chnge innertext -->currentquestn=current++
startButton.addEventListener("click", startquiz);
/*{event.stopPropagation()
    startquiz(); */
//start button should disapear after it's pressed and
// timer should begin counting down 

/*var optnEl =document.querySelectorAll (".optn-btn")
console.log (optnEl)
console.log (optnButton)*/
var optn1Button= document.getElementById ("optn-a");
var optn2Button= document.getElementById ("optn-b");
var optn3Button= document.getElementById ("optn-c");
var optn4Button= document.getElementById ("optn-d");

function quizoptns() {
    optn1Button.number=questionArray[currentQuestion].option1;
    optn2Button.number=questionArray[currentQuestion].option2;
    optn3Button.number=questionArray[currentQuestion].option3;
    optn4Button.number=questionArray[currentQuestion].option4;
};
optn1Button.addEventListener ("click", function (event)
{
 event.stopPropagation();
 /*fnctn blah (); */
});