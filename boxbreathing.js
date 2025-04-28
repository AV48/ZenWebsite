var images = document.getElementById("boxbreathingimages");
var button = document.getElementById("start-simulation");
button.addEventListener("click", runSimulation);

function runSimulation() { 
  setTimeout(() => {
    images.src = " photos/box copy.png";
  }, 100);
  
  setTimeout(() => {
  images.src = "photos/box breathing.jpg";
}, 3000);

setTimeout(() => {
  images.src = "photos/box breathing (1).jpg";
}, 4000);

setTimeout(() => {
  images.src = "photos/box breathing (2).jpg";
}, 5000);

setTimeout(() => {
  images.src = "photos/box breathing (3).jpg";
}, 6000);

setTimeout(() => {
  images.src = "photos/box breathing (5).jpg";
}, 7000);

setTimeout(() => {
  images.src = "photos/holdfour.jpg";
}, 8000);

setTimeout(() => {
  images.src = "photos/holdthree.png";
}, 9000);

setTimeout(() => {
  images.src = "photos/holdtwo.png";
}, 10000);

setTimeout(() => {
  images.src = "photos/holdone.png";
}, 11000);

setTimeout(() => {
  images.src = "photos/holdzero.png";
}, 12000);

setTimeout(() => {
  images.src = "photos/box breathing (10).jpg";
}, 13000);

setTimeout(() => {
  images.src = "photos/box breathing (11).jpg";
}, 14000);

setTimeout(() => {
  images.src = "photos/box breathing (12).jpg";
}, 15000);

setTimeout(() => {
  images.src = "photos/box breathing (13).jpg";
}, 16000);

setTimeout(() => {
  images.src = "photos/box breathing (14).jpg";
}, 17000);

setTimeout(() => {
  images.src = "photos/holdfour.jpg";
}, 18000);

setTimeout(() => {
  images.src = "photos/holdthree.png";
}, 19000);

setTimeout(() => {
  images.src = "photos/holdtwo.png";
}, 20000);

setTimeout(() => {
  images.src = "photos/holdone.png";
}, 21000);

setTimeout(() => {
  images.src = "photos/holdzero.png";
}, 22000);

setTimeout(() => {
  images.src = "photos/box breathing (17).png";
}, 23000);
  
}
