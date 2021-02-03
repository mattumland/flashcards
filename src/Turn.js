class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return this.guess === this.currentCard.correctAnswer
  }

  giveFeedback() {
    return (this.evaluateGuess() ? 'Correct!' : 'Incorrect!');
  }
}

module.exports = Turn;
