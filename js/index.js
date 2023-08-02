const quoteBody = document.getElementById("quoteBody");
const authorBody = document.getElementById("authorBody");
const photo = document.getElementById("photo");
console.log(quoteBody)
console.log(authorBody)
console.log(photo)


const quoteList = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss",
        image: "https://bit.ly/2Gf5Bwn"
      },
      {
        quote:
          "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe",
        image: "https://bit.ly/2IU7GQ3"
      },
      {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        image: "https://bit.ly/2DWZDOH"
      },
      {
        quote:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
        image: "https://bit.ly/2I75vHs"
      },
      {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
        image: "https://bit.ly/2GgTTBy"
      },
      {
        quote:
          "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
        image: "https://bit.ly/2I6BaZO"
      },
      {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
        image: "https://bit.ly/2pIBAhn"
      },
];

function retreiveRdmQuote() {
    let rdmIndex = Math.floor(Math.random() * quoteList.length)
    

    console.log(rdmIndex)
    console.log(quoteList[rdmIndex].quote)
    console.log(quoteList[rdmIndex].author)
    console.log(quoteList[rdmIndex].image)

    quoteBody.innerHTML = quoteList[rdmIndex].quote;
    authorBody.innerHTML = quoteList[rdmIndex].author;
    photo.src = quoteList[rdmIndex].image;
};

window.onload = function() {
    retreiveRdmQuote();
}
