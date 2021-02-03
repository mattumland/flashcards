const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.shift();
  }

  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.returnCurrentCard());

    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.currentCard.id);
      }

    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    const rawPercent = this.incorrectGuesses.length / this.turns;
    return (rawPercent * 100);
  }

}

module.exports = Round;
