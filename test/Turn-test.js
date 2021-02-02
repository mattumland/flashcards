const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../scr/Card');

describe('Card', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should be able to have a guess', function() {
    const turn = new Turn('Flaming dog poo');

    expect(turn.guess).to.equal('Flaming dog poo');
  });

  it.skip('should start with a card', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.currentCard).to.equal(card);
  });

  it.skip('should be able to return the guess', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.returnGuess()).to.equal('duh');
  });

  it.skip('should be able to return the card', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turn = new Turn('duh', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should be able to determine if the guess is correct', function() {
    const cardA = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turnA = new Turn('duh', cardA);
    const cardB = new Card(1,'What is the best Star Trek show?',['TNG','Voyager','DS9'],'TNG');
    const turnB = new Turn('TNG', cardB);

    expect(turnA.evaluateGuess()).to.equal(false);
    expect(turnB.evaluateGuess()).to.equal(true);
  });

  it.skip('should be able to provide feedback based on the guess', function() {
    const card = new Card(1,'What is your favorite food and why is it pizza?',['duh','come on','double duh'],'double duh');
    const turnA = new Turn('duh', card);
    const turnB = new Turn ('double duh', card);

    expect(turn.giveFeedback()).equal(false);
  });

});
