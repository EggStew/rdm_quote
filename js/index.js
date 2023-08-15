const quoteList = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss",
        image: "https://bit.ly/2Gf5Bwn"
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

let rdmIndex;
let prevIndex;

function retreiveRdmQuote() {   
  
    rdmIndex = Math.floor(Math.random() * quoteList.length)

    if (rdmIndex === prevIndex) {

      retreiveRdmQuote();

    } else {
    
    prevIndex = rdmIndex

    quoteBody.innerHTML = quoteList[rdmIndex].quote;
    authorBody.innerHTML = `- ${quoteList[rdmIndex].author}`;
    photo.src = quoteList[rdmIndex].image;
    
    }

    
};

window.onload = function() {

  const quoteBody = document.getElementById("quoteBody");
  const authorBody = document.getElementById("authorBody");
  const photo = document.getElementById("photo");
  console.log(quoteBody)
  console.log(authorBody)
  console.log(photo)
  
    retreiveRdmQuote();
}
