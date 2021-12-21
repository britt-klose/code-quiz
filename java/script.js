var startButton = document.getElementById("start-btn");
var questionArray = [
    {
        question: "q1", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "q2", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "q3", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "q4", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
    {
        question: "q5", 
        option1: "a",
        option2: "b",
        option3: "c",
        option4: "d",
        correctanswer: "b"

    },
]
var currentQuestion= 0
var qustnEl = document.getElementById ("questions");
function startquiz () {
    qustnEl.innerText=questionArray[currentQuestion].question
    //repeat for other 4 buttons. chnge innertext to number
    //dont use for loop cuz easier to do it other way
}
//add event listener for 4 buttons(m/c optns). when hit button chnge innertext =currentquestn=current++
startButton.addEventListener("click", startquiz)