var Dice = [
  { id: 1, path: "./images/dice1.png" },
  { id: 2, path: "./images/dice2.png" },
  { id: 3, path: "./images/dice3.png" },
  { id: 4, path: "./images/dice4.png" },
  { id: 5, path: "./images/dice5.png" },
  { id: 6, path: "./images/dice6.png" },
];

function rollTheDice() {
  var [player1 = 0, player2 = 0] = getRandomNumbers();
  if (player1 < 1 || player2 < 1) {
    [player1 = 0, player2 = 0] = getRandomNumbers();
  }
  console.log("player1 " + player1 + " player2 " + player2);
  document
    .querySelector("div img.img1")
    .setAttribute("src", Dice[player1].path);
  document
    .querySelector("div img.img2")
    .setAttribute("src", Dice[player2].path);
}

function getRandomNumbers() {
  var player1 = Math.round(Math.random() * 5);
  var player2 = Math.round(Math.random() * 5);
  return [player1, player2];
}
