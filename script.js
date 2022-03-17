
function rollDice () {

      var i = 1;

      const interval = setInterval(function () {

        var tempNumber1 = Math.floor(Math.random() * 6) + 1; // gives random number between 1-6

        var tempDiceImage = "dice" + tempNumber1 + ".png"; // dice1.png to dice6.png

        var tempImageSource = "images/" + tempDiceImage; //images/dice1.png to images/dice6.png

        var tempimage1 = document.querySelectorAll("img")[0];

        tempimage1.setAttribute("src", tempImageSource);


        var tempNumber2 = Math.floor(Math.random() * 6) + 1;

        var tempImageSource2 = "images/dice" + tempNumber2 + ".png";

        var tempimage2= document.querySelectorAll("img")[1];

        tempimage2.setAttribute("src", tempImageSource2);

        i++;

        if( i == 10 ) {
          clearInterval(interval);
          finalResult();
        }

      }, 100);


}

function finalResult () {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // gives random number between 1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png to images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image2= document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);


  //if player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
  }
  else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw";
  }

}
