
var score = 0 ;

alert("Welcome to the JavaScript Quiz!\n\nTest your knowledge and see how much you know about JavaScript. Good luck!")

var ques1 = "What is the correct syntax for referring to an external script called 'script.js'?\n" +
           "A. script src='script.js'></script>\n" +
           "B. <script href='script.js'></script>\n" +
           "C. <script ref='script.js'></script>\n" +
           "D. <script link='script.js'></script>";


var ans1 = prompt(ques1);
if (ans1 === "A"){
    alert("Correct !");
    score++
}

else{
    alert("Incorrect. The correct answer is A.")
}


var ques2 =  "How do you create a function in JavaScript?\n"+
             "A.  call myFunction()\n " +
             "B. myFunction()\n" +
            "C. call function myFunction()\n" +
            "D. Call.myFunction()";

var ans2 = prompt(ques2);

if (ans2 === "B"){
    alert("correct!");
    score++
}
else{
    alert("Incorrect. The answer is B");
}
 
    var ques3 = "How can you add a comment in JavaScript?\n" +
    "A.<!-- This is a comment --> \n " +
    "B. // This is a comment\n" +
    "C. /* This is a comment */\n" +
     "D. Both B and C";
     
     var ans3 = prompt(ques3);

     if (ans3 === "C"){
alert("correct!");
score++
     }

     else{
        alert("Incorrect. the answer is C");
     }


     var ques4 = "Which of the following is correct to write 'Hello World' on a webpage?\n" +
    "A.('Hello World'); \n " +
    "B.response.write('Hello World'); \n" +
    "C.document.write('Hello World');\n" +
     "D.print('Hello World');";
     
     var ans4 = prompt(ques4);

     if (ans4 === "C"){
alert("correct!");
score++
     }

     else{
        alert("Incorrect. the answer is C");
     }


     var ques5 = "How do you create a function in JavaScript??\n" +
     "A.function = myFunction()\n "+
     "B.function:myFunction() \n" +
     "C.function => myFunction() \n" +
     "D.function myFunction()";
      
      var ans5 = prompt(ques5);
 
      if (ans5 === "D"){
 alert("correct!");
 score++
      }
 
      else{
         alert("Incorrect. the answer is C");
      }

      var ques6 = " Which built-in method calls a function for each element in the array?\n" +
     "A.forEach()\n " +
     "B.map()\n" +
     "C. filter()\n" +
     "D. reduce()";
      
      var ans6 = prompt(ques6);
 
      if (ans6 === "A"){
 alert("correct!");
 score++
      }
 
      else{
         alert("Incorrect. the answer is C");
      }
 alert("Quiz is over! you scored " + score + "out of 6")