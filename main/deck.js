class Card {
	constructor(rank, suit) {
		this.rank = rank
		this.suit = suit
	}
	
	print() {
		return this.rank + ' of ' + this.suit
	}

	getValue() {
		if(this.rank === 'JACK' || this.rank === 'QUEEN' || this.rank === 'KING') {
			return 10;
		} else if(this.rank === 'ACE') {
			return 11;
		} else {
			return parseInt(this.rank)
		}
	}
}

class Deck {
	
	constructor() {
		this.suits = ['SPADES','HEARTS','CLUBS','DIAMONDS']
		this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
		this.cards = this.createAllCards()
		this.cards = shuffle(this.cards)
	}

	createAllCards() {
		var allCards = []
		for(var i = 0; i < this.suits.length; i++) {
			for(var j = 0; j < this.ranks.length; j++) {
				allCards.push(new Card(this.ranks[j], this.suits[i]))
			}
		}
		return allCards
	}

	dealCard() {
		return this.cards.pop()
	}

}

//from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}