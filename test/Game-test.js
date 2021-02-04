const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe ('Game', function() {
  describe('Instantiate a game', function() {
    it('should be an instance of Game', function() {
      const game = new Game();

      expect(game).to.be.instanceof(Game);
    });

  });

  describe('Confirm game methods', function() {
    let cards = [];
    let deck;
    let round;

    beforeEach(function() {
      prototypeQuestions.forEach(cardInfo => {
        const newCard = new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
        cards.push(newCard);
      });
      deck = new Deck(cards);
      round = new Round(deck);
    });

    it('should create cards, put them in a deck and create a round', function() {
      const game = new Game();

      game.start();

      expect(game.currentRound.deck).to.be.deep.equal(deck.cards);

      expect(game.currentRound).to.be.deep.equal(round);
    });

  });

});
