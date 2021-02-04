const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const cards = [];
    let deck;

    prototypeQuestions.forEach(cardInfo => {
      const newCard = new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
      cards.push(newCard);
    });

    deck = new Deck(cards);

    this.currentRound = new Round(deck);
    // this.printMessage(deck, this.currentRound);
    // this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
