const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Initialize round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);

  it('should be an instance of Round', function() {
    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to be passed a deck when being initialized', function() {
    const round = new Round(deck);

    expect(round.deck).to.be.deep.equal(deck.cards);
  })

  it('should start with 0 turns', function() {
    const round = new Round(deck);

    expect(round.turns).to.be.deep.equal(0);
  });

  it('should start with no incorrectGuesses', function() {
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.be.deep.equal([]);
  });
});

describe('Confirm methods', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  const deck = new Deck([card1, card2, card3]);

  it('should return the top card of the deck', function() {
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.be.deep.equal(card1);
  });

  it('should advance the turn count following a guess', function() {
    const round = new Round(deck);

    round.takeTurn('sea otter');

    expect(round.turns).to.be.deep.equal(1);
  });

  it('should provide feedback for a correct guess', function() {
    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.be.deep.equal('Correct!');
  });

  it('should provide feedback and save the id for an incorrect guess', function() {
    const round = new Round(deck);

    expect(round.takeTurn('pug')).to.be.deep.equal('Incorrect!');
    expect(round.incorrectGuesses).to.be.deep.equal([1]);
  });

  it.only('should calculate the percentage of correct guesses', function() {
    const round = new Round(deck);

    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.be.deep.equal(50);
  })

});
