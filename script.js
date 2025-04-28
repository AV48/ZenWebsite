
var happyScore = 0;
var sadScore = 0;
var questionsAnswered = 0;


  var displayResult = document.getElementById("submit");
  var q1a1 = document.getElementById("happy");
  var q1a2 = document.getElementById("sad");
  var q1a3 = document.getElementById("anxious");
  var q1a4 = document.getElementById("calm");
  var q1a5 = document.getElementById("angry");
  var q1a6 = document.getElementById("just_alright");

  var q2a1 = document.getElementById("one");
  var q2a2 = document.getElementById("two");
  var q2a3 = document.getElementById("three");
  var q2a4 = document.getElementById("four");
  var q2a5 = document.getElementById("five");

  var q3a1 = document.getElementById("yes1");
  var q3a2 = document.getElementById("no1");

  var q4a1 = document.getElementById("yes2");
  var q4a2 = document.getElementById("no2");

var heading = document.getElementById("heading");

q1a1.addEventListener("click", happy);
q1a2.addEventListener("click", sad);
q1a3.addEventListener("click", sad);
q1a4.addEventListener("click", happy);
q1a5.addEventListener("click", sad);
q1a6.addEventListener("click", happy);
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);
q1a5.addEventListener("click", disableQ1);
q1a6.addEventListener("click", disableQ1);

q2a1.addEventListener("click", sad);
q2a2.addEventListener("click", sad);
q2a3.addEventListener("click", happy);
q2a4.addEventListener("click", happy);
q2a5.addEventListener("click", happy);
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);
q2a5.addEventListener("click", disableQ2);

q3a1.addEventListener("click", happy);
q3a2.addEventListener("click", sad);
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", sad);
q4a2.addEventListener("click", happy);
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);



function happy() {
  happyScore += 1;
  questionsAnswered += 1;
  console.log("added");
  if (questionsAnswered == 4) {
    updateResult();
  }
}

function sad() {
  sadScore += 1;
  questionsAnswered += 1;
  console.log("added");
  if (questionsAnswered == 4) {
    updateResult();
  }
}

function updateResult() {
  var displayResult = document.getElementById("submit");
  if(displayResult) displayResult.addEventListener("click", display);
}

function display() {
  if (happyScore == 3) {
    console.log("happy wins");
    window.location.href = "recommendation1.html";
  }
  else if (happyScore == 4) {
    window.location.href = "recommendation2.html";
  }
  else if (happyScore == 2) {
    window.location.href = "recommendation3.html";
  }
  else {
    window.location.href = "recommendation4.html";
  }
}

function disableQ1() {
  document.getElementById("happy").disabled = true;
  document.getElementById("happy").style.opacity = "0.5";
  document.getElementById("just_alright").disabled = true;
  document.getElementById("just_alright").style.opacity = "0.5";
  document.getElementById("sad").disabled = true;
   document.getElementById("sad").style.opacity = "0.5";
  document.getElementById("anxious").disabled = true;
   document.getElementById("anxious").style.opacity = "0.5";
  document.getElementById("calm").disabled = true;
   document.getElementById("calm").style.opacity = "0.5";
  document.getElementById("angry").disabled = true;
   document.getElementById("angry").style.opacity = "0.5";
}

function disableQ2() {
  document.getElementById("one").disabled = true;
   document.getElementById("one").style.opacity = "0.5";
  document.getElementById("two").disabled = true;
   document.getElementById("two").style.opacity = "0.5";
  document.getElementById("three").disabled = true;
   document.getElementById("three").style.opacity = "0.5";
  document.getElementById("four").disabled = true;
   document.getElementById("four").style.opacity = "0.5";
  document.getElementById("five").disabled = true;
   document.getElementById("five").style.opacity = "0.5";
}

function disableQ3() {
  document.getElementById("yes1").disabled = true;
   document.getElementById("yes1").style.opacity = "0.5";
  document.getElementById("no1").disabled = true;
   document.getElementById("no1").style.opacity = "0.5";
}

function disableQ4() {
  document.getElementById("yes2").disabled = true;
   document.getElementById("yes2").style.opacity = "0.5";
  document.getElementById("no2").disabled = true;
   document.getElementById("no2").style.opacity = "0.5";
}

var progress = document.getElementById("progress");
if (happyScore == 0) {
  progress.src = "progress-0.png";
}
if (happyScore == 1) {
  progress.src = "progress-1.png";
}
if (happyScore == 2) {
  progress.src = "progress-2.png";
}
if (happyScore == 3) {
  progress.src = "photos/7.5.png";
}
if (happyScore == 4) {
  progress.src = "progress-4.png";
}




