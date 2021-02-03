class Deck {
  constructor(cardList) {
    this.cards = cardList;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
