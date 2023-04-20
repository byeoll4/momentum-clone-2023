const quotes = [
  {
    quote: "The Legend of Zelda : Tears of Kingdom",
    release: "Nintendo, 12 may 2023",
  },
  {
    quote: "DIABLO 4",
    release: "Blizard Ent., 6 jun 2023",
  },
  {
    quote: "Assassin’s CREED MIRAGE",
    release: "ubsoft, Comming Soon",
  },
  {
    quote: "Lies of P",
    release: "neowiz, aug 2023",
  },
  {
    quote: "PARCRY 6",
    release: "ubsoft toronto, 7 oct 2021",
  },
  {
    quote: "Crimson Desert",
    release: "pearl Abyss, 2023",
  },
  {
    quote: "STARFIELD",
    release: "bethesda, 2023",
  },
  {
    quote: "Final Fantasy XVI",
    release: "squareenix, summer 2023",
  },
  {
    quote: "BIOHAZARD RE:4",
    release: "CAPCOM, 24 mar 2023",
  },
  {
    quote: "Kingdom : The Blood",
    release: "ActionSquare, 2023",
  },
];

const quote = document.querySelector(".quote span:first-child");
const release = document.querySelector(".quote span:last-child");
const leftBtn = document.querySelector(".left-button button");
const rightBtn = document.querySelector(".right-button button");

let todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
release.innerText = todaysQuote.release;
const indexNum = quotes.findIndex((a) => a.quote == todaysQuote.quote);

console.log(indexNum);

const adjQuoteNumber = {
  minusQuote: function () {
    todaysQuote = quotes[indexNum - 1];
  },
  plusQuote: function () {
    todaysQuote = quotes[indexNum + 1];
  },
};

const slideText = {
  lBtn: function () {
    if (indexNum < 10) {
      quote.innerText = quotes[indexNum - 1].quote;
      release.innerText = quotes[indexNum - 1].release;
      adjQuoteNumber.minusQuote();
    } else if (indexNum === 0) {
      quote.innerText = quotes[9].quote;
      release.innerText = quotes[9].release;
    }
  },
  rBtn: function () {
    if (indexNum < 10) {
      quote.innerText = quotes[indexNum + 1].quote;
      release.innerText = quotes[indexNum + 1].release;
      adjQuoteNumber.plusQuote();
    } else if (indexNum === 9) {
      quote.innerText = quotes[1].quote;
      release.innerText = quotes[1].release;
    }
  },
};

leftBtn.addEventListener("click", slideText.lBtn);
rightBtn.addEventListener("click", slideText.rBtn);
