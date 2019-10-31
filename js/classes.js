var numToName = ["OOPS", "Ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King"]
var suits = [["clubs","black"], ["diamonds","red"], ["hearts", "red"], ["spades", "black"]] 

class Card {
    constructor(suit, num) {
        this.suit = suit[0];
        this.num = num;
        this.color = suit[1];
        this.name = numToName[num];
    }
    show(){
        console.log(`CARD: 
            name : ${this.name};
            suit : ${this.suit};
            num : ${this.num};
            color : ${this.color};`
        )
    }
}


class Deck {
    constructor(){
        this.reset()
    }
    reset(){
        this.cards = []
        for (var i = 1; i < numToName.length; i++){
            for (var x = 0; x < suits.length; x++){
                this.cards.push(new Card(suits[x], i));
            }
        }
        return this;
    }

    seeDeck(){
        console.log("DECK=====================================")
        for (var card of this.cards){
            console.log(`(${card.num}) ${card.name} of  ${card.suit},  ${card.color}`);
        }
        return this;
    }

    deal(count=1){
        
        var choose = Math.floor(Math.random()*(this.cards.length-(count-1)));
        return this.cards.splice(choose, count)
    }

    pickOneCard(){
        var choose = Math.floor(Math.random()*(this.cards.length-1));
        return this.cards.splice(choose, 1)
    }


    shuffle() {
    var m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
    }
    console.log(this.cards)
    return this;
    }
}


class Player {
    constructor(name, deck) {
        this.name = name;
        this.hand = deck.deal(8);
        var deck = deck;
    }
    pickOneCard(){
        this.hand.push(deck.pickOneCard())
    }
    discard(index){
        this.hand.splice(index, 1)
    }

}

