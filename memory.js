const cards = 
  document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
  {
      id: 1,
      image: 
'photos/bow.png',
      newAlt: 'bow'
  },
  {
      id: 2,
      image: 
'photos/flower.png',
      newAlt: 'flower'
  },
  {
      id: 3,
      image: 
'photos/journal.png',
      newAlt: 'journal'
  },
  {
      id: 4,
      image: 
'photos/cloud.png',
      newAlt: 'cloud'
  },
  {
      id: 5,
      image: 
'photos/candle.png',
      newAlt: 'candle'
  },
  {
      id: 6,
      image: 
'photos/journal.png',
      newAlt: 'journal'
  },
  {
      id: 7,
      image: 
'photos/candle.png',
      newAlt: 'candle'
  },
  {
      id: 8,
      image: 
'photos/flower.png',
      newAlt: 'flower'
  },
  {
      id: 9,
      image: 
'photos/gem.png',
      newAlt: 'gem'
  },
  {
      id: 10,
      image: 
'photos/bow.png',
      newAlt: 'bow'
  },
  {
      id: 11,
      image: 
'photos/gem.png',
      newAlt: 'gem'
  },
  {
      id: 12,
      image: 
'photos/cloud.png',
      newAlt: 'cloud'
  }
]


const restartGame = () => {
  let toggledCard = 
      document.getElementsByClassName('card toggled');
  imagesLinkArray.sort(() => Math.random() - 0.5);
  Object.values(toggledCard).forEach(function (el) {
      setTimeout(() => {
          el.classList.remove("toggled");
      }, 0);
  })
  toggledCardsArray.length = 0;
  move = 0;
  winCount=0;
  movesDisplay.innerText = `Moves: ${move}`;
  let allImagesSrc = document.getElementsByClassName('card-image');
  Object.values(allImagesSrc).forEach((el, index)=>{
      el.src = imagesLinkArray[index].image;
      el.alt = imagesLinkArray[index].newAlt;
      el.id = imagesLinkArray[index].id
  }) 
}
restart.addEventListener('click', restartGame);


for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function () {
      this.classList.add("toggled");
      toggledCardsArray.push(this);
      let thisImgSrc = this.querySelector('.card-image').src;
      let previousImgSrc = 
      toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
      if(thisImgSrc !== previousImgSrc) {
          toggledCardsArray.forEach(function (el) {
              setTimeout(() => {
                  el.classList.remove("toggled");
              }, 500);
          })
          toggledCardsArray.length = 0;
          move++;
      }
      else{
          toggledCardsArray.length = 0;
          move++;
          winCount++;
      }
      movesDisplay.innerText = `Moves: ${move}`;
      if(winCount===6){
          setTimeout(()=>{
              alert(`Congratulations!!! You won the game in ${move} moves.`)
          }, 300)
      }
  })
}
