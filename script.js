document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    displayLoader();
    createBoard();
  }, 1000);

  function displayLoader() {
    var loader = document.querySelector(".loader");

    loader.classList.add("hidden");
  }

  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "burger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "burger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  function createBoard() {
    var loader = document.querySelector(".loading");
    loader.remove();

    const grid = document.querySelector(".grid");

    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");

      card.setAttribute("src", cardArray[i].img);
      card.setAttribute("id", i);

      grid.appendChild(card);
    }
    setTimeout(() => {
      for (let i = 0; i < cardArray.length; i++) {
        var cards = document.querySelectorAll("img");
        cards[i].addEventListener("click", flipcard);
        cards[i].setAttribute("src", "images/blank.png");
      }
    }, 2000);
  }
  var cardChoosen = [];
  var cardChoosenId = [];
  var cardsWon = 0;
  function checkformatch() {
    var optionOne = cardChoosenId[0];
    var optionTwo = cardChoosenId[1];

    if (cardChoosen[0] == cardChoosen[1]) {
      alert("Has acertado , sigue asi.");

      cards = document.querySelectorAll("img");
      cards[optionOne].setAttribute("src", "images/white.png");
      cards[optionTwo].setAttribute("src", "images/white.png");
      cards[optionOne].removeEventListener("click", flipcard);
      cards[optionTwo].removeEventListener("click", flipcard);
      cardChoosen = [];
      cardChoosenId = [];
      cardsWon++;
      const result = document.querySelector("#result");
      result.innerHTML = cardsWon;
    } else {
      alert("Has fallado , sigue intentandolo.");
      cards[cardChoosenId[0]].setAttribute("src", "images/blank.png");
      cards[cardChoosenId[1]].setAttribute("src", "images/blank.png");
      cardChoosen = [];
      cardChoosenId = [];
    }

    if (cardsWon === 6) {
      setTimeout(() => {
        JavaScript: location.reload();
      }, 2000);
    }
  }

  function flipcard() {
    var cardId = this.getAttribute("id");
    console.log(cardId);
    cards = document.querySelectorAll("img");
    cards[cardId].setAttribute("src", cardArray[cardId].img);
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    if (cardChoosen.length === 2) {
      setTimeout(checkformatch, 500);
    }
  }

  if (cardsWon.length === cardArray.length) {
    alert("Has completado el juego");
  }
});
