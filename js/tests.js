var deck = new Deck()
// deck.seeDeck().shuffle().seeDeck().reset().seeDeck()
console.log(deck.deal(1).forEach(function(card) {
    card.show()
}, this))
// console.log(deck.pickOneCard())