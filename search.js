window.onload = function() {
  const cells = document.getElementsByTagName('td');
  const words = document.getElementsByClassName('words')

  for(let cell of cells) {
    cell.onclick = function() {
      if (this.className === "") {
        this.className = "clicked";
      } else {
        this.className = "";
      }
    }
  }
  for (let word of words) {
    word.onclick = function() {
      if (this.className === "words") {
        this.className = "words selected";
      }
      else {
        this.className = "words";
      }
    }
  }
  var reset = document.getElementById('reset');
  reset.addEventListener("click", resetAll);
  function resetAll() {
    for (let cell of cells) {
      cell.className = "";
    }
    for (let word of words) {
      word.className = "words";
    }
  }
}
