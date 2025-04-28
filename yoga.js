var links = ["https://www.youtube.com/embed/tA8E4l8Dj34?si=idQyD1JXNhz5FzpU", "https://www.youtube.com/embed/yPK7ISPEu3M?si=Sg_wmr04EWH7KKP_", "https://www.youtube.com/embed/vNyJuQuuMC8?si=QW361-xA18bZq0dC", "https://www.youtube.com/embed/0L_YrMcwU3w?si=GISzKLktzvwZQ6U0"]
var number = 0;

var goForward = document.getElementById("forward");
var goBackward = document.getElementById("backward");

goForward.addEventListener("click", forward);
goBackward.addEventListener("click", backward);

function forward() {
  number += 1;
  if (number == 4) {
    number = 0;
  }
  document.getElementById("video").src = links[number];
}

function backward() {
  number -= 1;
  if (number == -1) {
    number = 3;
  }
  document.getElementById("video").src = links[number];
}
