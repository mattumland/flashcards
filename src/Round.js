class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    const card = this.deck.shift();
    return card;
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();

    this.turns++;

    if (guess === currentCard.correctAnswer) {
      return `Correct!`
    } else {
      this.incorrectGuesses.push(currentCard.id);
      return `Incorrect!`
    }
  }


  calculatePercentCorrect() {
    const rawPercent = this.incorrectGuesses.length / this.turns;
    return (rawPercent * 100);
  }

}

module.exports = Round;
