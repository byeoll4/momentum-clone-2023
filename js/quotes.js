const games = [
  {
    game: "The Legend of Zelda : Tears of Kingdom",
    release: "Nintendo, 12 may 2023",
  },
  {
    game: "DIABLO 4",
    release: "Blizard Ent., 6 jun 2023",
  },
  {
    game: "Assassin’s CREED MIRAGE",
    release: "ubsoft, Comming Soon",
  },
  {
    game: "Lies of P",
    release: "neowiz, aug 2023",
  },
  {
    game: "PARCRY 6",
    release: "ubsoft toronto, 7 oct 2021",
  },
  {
    game: "Crimson Desert",
    release: "pearl Abyss, 2023",
  },
  {
    game: "STARFIELD",
    release: "bethesda, 2023",
  },
  {
    game: "Final Fantasy XVI",
    release: "squareenix, summer 2023",
  },
  {
    game: "BIOHAZARD RE:4",
    release: "CAPCOM, 24 mar 2023",
  },
  {
    game: "Kingdom : The Blood",
    release: "ActionSquare, 2023",
  },
];
const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];

const game = document.querySelector(".quote span:first-child");
const release = document.querySelector(".quote span:last-child");
const leftBtn = document.querySelector(".left-button button");
const rightBtn = document.querySelector(".right-button button");

const bgImage = document.createElement("img");

let setBgIndex = 0;
let gamesIndex = 0;
//let indexNum = quotes.findIndex((a) => a.quote == todaysQuote.quote);

loadTitle(games[gamesIndex]);
bgImage.src = `img/${images[setBgIndex]}`;

function loadTitle(title) {
  game.innerText = title.game;
  release.innerText = title.release;
  document.body.appendChild(bgImage);
}

function lfBtn() {
  if (gamesIndex < 10) {
    gamesIndex--;
    if (gamesIndex === -1) {
      gamesIndex = games.length - 1;
    }
  }
  loadTitle(games[gamesIndex]);
}

function rtBtn() {
  if (gamesIndex >= 0) {
    gamesIndex++;
    if (gamesIndex === games.length) {
      gamesIndex = 0;
    }
  }
  loadTitle(games[gamesIndex]);
}

leftBtn.addEventListener("click", lfBtn);
rightBtn.addEventListener("click", rtBtn);
