var factList = ["I am capable of acheiving my goals.", "I am worthy of love and respect.", "I am growing and improving every day.", "I am enough.", "I am proud of myself.", "I choose my choices.", "I am constantly growing.", "I am confident in my abilities.", "I am a good person."];

var fact = document.getElementById("quotes");
var myButton = document.getElementById("reload");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
