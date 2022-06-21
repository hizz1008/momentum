const imges = [
    "0.jpeg",
    "1.jpeg", 
    "2.jpeg"
]

const chosenImge = imges[Math.floor(Math.random() * imges.length)];

const bgimges = document.createElement("img");

bgimges.src = `img/${chosenImge}`;

document.body.appendChild(bgimges);
