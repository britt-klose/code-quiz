var startButton = document.getElementById("start-btn");
var questionArray = [
    {
        question: "A(n) __ is used to store data in single variable.", 
        option1: "a. Array",
        option2: "b. Console Log",
        option3: "c. Parenthesis",
        option4: "d. Index",
        correctanswer: "a. Array"

    },
    {
        question: "What does the arithmetic operator % do?", 
        option1: "a. The world may never know",
        option2: "b. Asks what the remainder is after a number has been divided",
        option3: "c. Asks what percent a number is of another number",
        option4: "d. None are right because % is a comparison operator",
        correctanswer: "b. Asks what the remainder is after a number has been divided"

    },
    {
        question: "What does API stand for?", 
        option1: "a. Application Programming Interface",
        option2: "b. Application Proffessional Intercommunication ",
        option3: "c. Autimated Programming Interface",
        option4: "d. Authorized preface Intercom ",
        correctanswer: "a. Application Programming Interface"

    },
    {
        question: "What is DOM or the Document Object Model?", 
        option1: "a. It is used to retrieve resources from a web server and then displays them on a user's device",
        option2: "b. A set of methods, properties, and URLs that are used to interact with components",
        option3: "c. A tree of objects that represent the opened page ",
        option4: "d. It is used to manipulate the CSS",
        correctanswer: "c. A tree of objects that represent the opened page "

    },
    {
        question: "What does the following code do? var studentName",
        option1: "a. Defines the value of a variable called studentName",
        option2: "b. Other",
        option3: "c. Changes the name of the variable from 'name' to 'student'",
        option4: "d. Creates a variable called studentName",
        correctanswer: "d. Creates a variable called studentName"

    },
    {
        question: "A(n) __ is a set of methods, properties, events, and URLs that developers use to interact with components of a user's web browser.", 
        option1: "a. Web browser or browser",
        option2: "b. API",
        option3: "c. URL",
        option4: "d. DOM",
        correctanswer: "b. API"

    },
    {
        question: "What does the following code do? Console.log (document.body.children[1])",
        option1: "a. Logs the second child of the body",
        option2: "b. Logs the first child of the body",
        option3: "c. Logs the first child of the document",
        option4: "d. Logs the second child of the HTML document",
        correctanswer: "a.Logs the second child of the body"

    },
    {
        question: "Which is the correct syntax in java for grabbing a HTML element by an ID?", 
        option1: "a. document.getElement (' ');",
        option2: "b. document.getElementByChild (' ');",
        option3: "c. document.getElementById (' ');",
        option4: "d. document.getelementByID (' ');",
        correctanswer: "c. document.getElementById (' ');"

    },
    {
        question: 'True or False? You have to redeclare a variable each and any time you change its value.', 
        option1: "a. True",
        option2: "b. False",
        option3: "c. You can't change the value of a variable once it is defined",
        option4: "d. I love bread",
        correctanswer: "b. False"

    },
    {
        question: 'What does the following example of code do?  var h4Els=document.querySelectorAll ("h4")',
        option1: "a. The first h4 tag is selected for a new varaible",
        option2: "b. I have no idea",
        option3: "c. All h4 tags are selected and stored in their own variable",
        option4: "d. All h4 tags are selected and stored in a single variable ",
        correctanswer: "d. All h4 tags are selected and stored in a single variable "

    },
    {
        question: "___ are reusable blocks of code that perform a specific task.", 
        option1: "a. Friends",
        option2: "b. Loops",
        option3: "c. Functions",
        option4: "d. Variables",
        correctanswer: "c. Functions"

    },
    {
        question: "How do you combine a message with a variable value?", 
        option1: "a. Use concatenation operator (+)",
        option2: "b. You can't",
        option3: "c. Seperate them with commas ",
        option4: "d Everything must be in quotation marks",
        correctanswer: "a. Use concatenation operator (+)"

    },
    {
        question: "What is the following code? 'Hi I'm Olivia' ",
        option1: "a. A boolean",
        option2: "b. Undefined",
        option3: "c.  A string",
        option4: "d. A variable",
        correctanswer: "c.  A string"

    },
    {
        question: "A keyup event is fired when___.",
        option1: "a. A key is pressed",
        option2: "b. A key is realeased",
        option3: "c. A user clicks on a button",
        option4: "d. A key is either pressed or released",
        correctanswer: "b. A key is realeased"

    },
    {
        question: "Event ____ is when you trigger an event from a child element, and have an ancestor catch it, optionally, with data.",
        option1: "a. Navigation",
        option2: "b. Bubbling ",
        option3: "c. Propagation",
        option4: "d. None of the options are correct",
        correctanswer: "b. Bubbling "

    },
    {
        question: "What is an .addEventListener used for?",
        option1: "a. Listens for event to be over to end function",
        option2: "b. Looks out for an event behavior to happen (eg click, hover)",
        option3: "c. Unable to answer without more information",
        option4: "d. Adds a button to a webpage",
        correctanswer: "b. Looks out for an event behavior to happen (eg click, hover)"

    },
    {
        question: "localStorage.getItem retrieves an item using a(n)___ that's defined by localStorage.setItem",
        option1: "a. ID",
        option2: "b. Class",
        option3: "c. Don't pick me! I'm not the answer.",
        option4: "d. Key",
        correctanswer: "d. Key"

    },
    {
        question: "In a comparison What does === mean?",
        option1: "a. Stricly equal",
        option2: "b. Equal",
        option3: "c. Loose equality",
        option4: "d. Extra love",
        correctanswer: "a. Stricly equal"

    },
    {
        question: "True or False? JSON.stringify converts a JSON string into an object",
        option1: "a. Coding is fun",
        option2: "b. Void, because this syntax doesn't exist",
        option3: "c. False ",
        option4: "d. True",
        correctanswer: "c. False"

    },
    {
        question: "Unlike JSON.parsel, JSON.stringify converts a(n) ___ into a(n)___",
        option1: "a. Java Script value, JSON string",
        option2: "b. JSON value, Java Script string",
        option3: "c. JSON string, object",
        option4: "d. Java Script string, JSON value ",
        correctanswer: "a. Java Script value, JSON string"

    },
]

var currentQuestion= 0
var questionCount=0
var qustnEl = document.getElementById ("questions");
var timeEl = document.getElementById ("time");
var minutesLeft= 30;
var countEl=document.getElementById("count");

function setCounterText(){
    countEl.textContent = "Question: " + questionCount +"/20" ;
}
/*function displayQstn(){
    qustnEl.textContent=questionArray.question
}*/
function setTime(){
    var timerInterval = setInterval(function(){
        minutesLeft--;
        timeEl.textContent= "Minutes left: " + minutesLeft;

        if (minutesLeft ===0)// || questionCount>20)
        {clearInterval (timerInterval);
            //countEl.textContent="";
            //qustnEl.textContent="";
            endQuiz();
        }
    }, 1000); // 60000);
    //delay between intervals set to 1 minute. Timer doesn't show up until 1 minute has passed
//is there way to have timer show immediately?

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
    countEl.textContent="";
    qustnEl.textContent="";
    //prompt to input initials and save score
}

//Function to begin the quiz
function startquiz (event) {
    event.stopPropagation();
    qustnEl.innerText=questionArray[currentQuestion].question;
    countEl.innerText=questionArray[questionCount].question;
    optn1Button.innerText=questionArray[currentQuestion].option1;
    optn2Button.innerText=questionArray[currentQuestion].option2;
    optn3Button.innerText=questionArray[currentQuestion].option3;
    optn4Button.innerText=questionArray[currentQuestion].option4;
    setTime();
    //displayQstn()
    setCounterText();
    //repeat for other 4 buttons. chnge innertext to number
}
console.log(startquiz);
startButton.addEventListener("click", startquiz);
/*{event.stopPropagation()
    startquiz(); */
//start button should disapear after it's pressed and
// timer should begin counting down 


//Varibales for answer choice buttons
var optn1Button= document.getElementById ("optn-a");
var optn2Button= document.getElementById ("optn-b");
var optn3Button= document.getElementById ("optn-c");
var optn4Button= document.getElementById ("optn-d");

//Function to chose an answer and go to next question
function finalAnswerA() {
    //qustnEl.innerText=questionArray[currentQuestion++].question;
    qustnEl.innerText=questionArray[currentQuestion].question;
    currentQuestion++
    if (questionCount<20){
        questionCount++;
    }
        else {
            clearInterval (timerInterval);
            endQuiz();
        }
    setCounterText();
    optn1Button.innerText=questionArray[currentQuestion++].option1
    //event.stopPropagation();
}
function finalAnswerB() {
    qustnEl.innerText=questionArray[currentQuestion].question;
    currentQuestion++
    if (questionCount<20){
        questionCount++;
    }else {
        endQuiz();}
    //questionCount++;
    setCounterText();
    optn2Button.innerText=questionArray[currentQuestion++].option2
    //displayQstn()
    //event.stopPropagation();
}
function finalAnswerC() {
    qustnEl.innerText=questionArray[currentQuestion].question;
    currentQuestion++
    if (questionCount<20){
        questionCount++;
    } else {
        endQuiz();}
    setCounterText();
    optn3Button.innerText=questionArray[currentQuestion++].option3
   // displayQstn()
    //event.stopPropagation();
}
function finalAnswerD() {
    qustnEl.innerText=questionArray[currentQuestion].question;
    currentQuestion++
    if (questionCount<20){
        questionCount++;
    } else {
        endQuiz();}
    setCounterText();
    optn4Button.innerText=questionArray[currentQuestion++].option4
   // displayQstn()
    //event.stopPropagation();
};
console.log(optn1Button)
//add event listener for 4 buttons(m/c optns). when hit button chnge innertext -->currentquestn=current++
optn1Button.addEventListener ("click", finalAnswerA);
optn2Button.addEventListener ("click", finalAnswerB);
optn3Button.addEventListener ("click", finalAnswerC);
optn4Button.addEventListener ("click", finalAnswerD);
