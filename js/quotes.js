const quotes = [
  {
    quote: "BTS 봉준호 손흥민 방준연",
    author: "Let`s Go!",
  },
  {
    quote: "아이언맨 배트맨 스파이더맨 침착맨",
    author: "Let`s Go!",
  },
  {
    quote: "KFC 맥도날드 버거킹 석봉토스트",
    author: "Let`s Go!",
  },
  {
    quote: "CIA FBI CSI 떡잎마을 방범대",
    author: "Let`s Go!",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDayQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQoute.quote;
author.innerText = toDayQoute.author;
