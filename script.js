//Setting initial helth of the player
var player1Health = 100;
var player2Health = 100;

// setting initially round to 0
let roundCounter = 0;

//Setting initial Score of the of both players to 0
let player1Score = 0;
let player2Score = 0;



//Executing "onclick" function after pressing shooting button
function shootBtn() {

  //Taking random power for both the player
  var player1Fire = Math.floor(Math.random() * 6);
  var player2Fire = Math.floor(Math.random() * 6);


  //printing the value of fire used by both players in table
  document.getElementById("p1FireScore").innerHTML = player1Fire;
  document.getElementById("p2FireScore").innerHTML = player2Fire;

  // used localStorage property to save key-value pairs in a web browser with no expiration date
  localStorage.setItem("player1Score", "p1FireScore");


  //Calculation for players health after hitting by power
  player1Health = player1Health - player2Fire;
  player2Health = player2Health - player1Fire;

  //printing the value of health of both players in table
  document.getElementById("player1Health").innerHTML = player1Health;
  document.getElementById("player2Health").innerHTML = player2Health;


  //incrementing roundCounter and printing the rounds detail in table 
  roundCounter++;
  document.getElementById("round").innerHTML = "Round " + roundCounter;


  // The Player whose health reaches 0, dies and the game ends.
  if (player1Health == 0) {
    document.getElementById("result").innerHTML = "Player 2 Won!";

  }
  if (player2Health == 0) {
    document.getElementById("result").innerHTML = "Player 1 Won!";

  }


  //Restricting shoot button when 5 rounds gets complete
  if (roundCounter == 5) {
    document.getElementById("shootBtn").disabled = true;
    document.getElementById("shootBtn").innerHTML = "Game Over";
    document.getElementById("shootBtn").style.backgroundColor = "grey";
  }

  //Finding the Winner of individual rounds and incrementing their score by 1
  if (player1Fire > player2Fire) {
    player1Score++;

  }

  if (player2Fire > player1Fire) {
    player2Score++;

  }

  localStorage.setItem("lastname", player1Score);
  document.getElementById("player1Score").innerHTML = player1Score;
  document.getElementById("player2Score").innerHTML = player2Score;


  //Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.
  if (player1Score == 3) {
    gameOver("Player 1 Won!")
  }

  if (player2Score == 3) {
    gameOver("Player 2 Won!")

  }


  //Checking which player has scored more after completing 5 rounds
  if (roundCounter == 5) {
    if (player1Score > player2Score) {
      gameOver("Player 1 Won!")

    }

    if (player2Score > player1Score) {
      gameOver("Player 2 Won!")

    }


    //Checking if both the players have scored equaly, if yes then printing DRAW
    if (player2Score == player1Score) {
      gameOver("Match Draw")

    }
  }


}

function gameOver(playercomment) {
  document.getElementById("result").innerHTML = playercomment;
  document.getElementById("shootBtn").disabled = true;
  document.getElementById("shootBtn").innerHTML = "Game Over";
  document.getElementById("shootBtn").style.backgroundColor = "grey";
}

//Reseting the game
function resetBtn() {
  location.reload();
  localStorage.clear();

}




