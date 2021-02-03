const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  describe('Initialize deck', function() {
    it('should be an instance of Deck', function() {
      const deck = new Deck();

      expect(deck).to.be.an.instanceof(Deck)
    });

    it('should begin with an array of Cards', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);

      expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

  });

  describe('Confirm card counting method', function() {
    it('should know how many cards it contains', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);

      expect(deck.countCards()).to.deep.equal(3);
    });

  });

});
