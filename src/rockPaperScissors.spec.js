import { game, rules, results } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should get a draw if both players choose rock', () => {
    const playerOneMove = rules.rock;
    const playerTwoMove = rules.rock;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.draw);
  });
  test('should get "player one wins" if players select rock and scissors', () => {
    const playerOneMove = rules.rock;
    const playerTwoMove = rules.scissors;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.playerOneWins);
  });
  test('should get "player two wins" if players select rock and paper', () => {
    const playerOneMove = rules.rock;
    const playerTwoMove = rules.paper;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.playerTwoWins);
  });
  test('should get a draw if both players choose paper', () => {
    const playerOneMove = rules.paper;
    const playerTwoMove = rules.paper;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.draw);
  });
  test('should get "player one wins" if players select paper and rock', () => {
    const playerOneMove = rules.paper;
    const playerTwoMove = rules.rock;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.playerOneWins);
  });
  test('should get "player two wins" if players select paper and scissors', () => {
    const playerOneMove = rules.paper;
    const playerTwoMove = rules.scissors;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.playerTwoWins);
  });
  test('should get a draw if both players choose scissors', () => {
    const playerOneMove = rules.scissors;
    const playerTwoMove = rules.scissors;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.draw);
  });
  test('should get "player one wins" if players select scissors and paper', () => {
    const playerOneMove = rules.scissors;
    const playerTwoMove = rules.paper;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.playerOneWins);
  });
  test('should get "player two wins" if players select scissors and rock', () => {
    const playerOneMove = rules.scissors;
    const playerTwoMove = rules.rock;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(results.playerTwoWins);
  });
});