const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Initialize a Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to have a guess', function() {
    const turn = new Turn('Flaming dog poo');

    expect(turn.guess).to.equal('Flaming dog poo');
  });

  it('should start with a card', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.currentCard).to.equal(card);
  });
});

describe('Turn method functionality', function() {

  it('should be able to return the guess', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.returnGuess()).to.equal('duh');
  });

  it('should be able to return the card', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to determine if the guess is correct', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to determine if the guess is incorrect', function() {
    const card = new Card(1,'What is the best Star Trek show?',['TNG','Voyager','DS9'],'TNG');
    const turn = new Turn('TNG', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to provide feedback based on the guess', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turnA = new Turn('duh', card);
    const turnB = new Turn ('double duh', card);

    expect(turnA.giveFeedback()).equal('Incorrect');
    expect(turnB.giveFeedback()).equal('Correct');
  });

});
