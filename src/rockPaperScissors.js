/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw


Result:
- Player One wins
- Player Two wins
- Is a draw
*/
export const rules = Object.freeze({
    rock: "rock",
    scissors: "scissors",
    paper: "paper",
  });
  
  export const results = Object.freeze({
    draw: 0,
    playerOneWins: 1,
    playerTwoWins: 2,
  });
  
  export const game = (playerOne, playerTwo) => {
    if (
      (playerOne === rules.rock && playerTwo === rules.scissors) ||
      (playerOne === rules.paper && playerTwo === rules.rock) ||
      (playerOne === rules.scissors && playerTwo === rules.paper)
    ) {
      return results.playerOneWins;
    }
  
    if (
      (playerOne === rules.rock && playerTwo === rules.paper) ||
      (playerOne === rules.paper && playerTwo === rules.scissors) ||
      (playerOne === rules.scissors && playerTwo === rules.rock)
    ) {
      return results.playerTwoWins;
    }
  
    return results.draw;
  };
  