var quotes = [
  ' " There is a way that seems right to a man but the end is destruction. -Proverbs 14:12 " ',
  ' " What you see and how you see it is responsible for resolving your perplexity "',
  ' " The waiting room is not a place of relaxation. -Ayiku AY Moses" ',
  ' " The posture of the heart is the exact position of the human spirit "',
  ' " Do not laugh at a falling person on a slippery ground when you still have a long way ahead. -Rachael Omiachi "',
  ' " Disorderliness is a pool of confusion "',
  ' " To be driven by iniquity and impurity is a choice "',
  ' " He who has a she goat should not be surprised if visited by a he goat. -Mercy Yusuf "',
  ' " The posture of your heart is needed to interpret the vision of your eyes "',
  ' " Confusion itself is a choice "',
  ' " When your heart gives you approval of your sight, begin development "',
  ' " The first sign to tell if you are confuse is indecision "',
  ' " The posture of your heart in synergy to the picture  of your heart eradicates confusion out of your path by 40% "',

];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    window.onload = document.getElementById("quoteDisplay").innerHTML =
    quotes[randomNumber];
    
    // document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    setInterval(() => {
      var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
  }, 1000*10);
}
