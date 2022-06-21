const quotes = [
    {
        quote:"원빈 현빈 강동원 방준연",
        author:"방준연"
},
{
    quote:"원빈 현빈 강동원 방준연",
    author:"방준연"
},
{
    quote:"원빈 현빈 강동원 방준연",
    author:"방준연"
},
{
    quote:"원빈 현빈 강동원 방준연",
    author:"방준연"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDayQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQoute.quote;
author.innerText = toDayQoute.author;
