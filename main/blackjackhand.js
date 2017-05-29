class BlackjackHand {

	constructor(card1,card2) {
		this.cards = []
		this.cards.push(card1)
		this.cards.push(card2)

		this.busted = false

		this.values = []
		this.evaluateHand()
	}

	hit(card) {
		this.cards.push(card)
		this.evaluateHand()
	}

	sumHand() {
		var sum = 0
		this.cards.forEach(function(card) {
			sum += card.getValue()
		})
		return sum
	}

	numberOfAces() {
		var numAces = 0
		this.cards.forEach(function(card) {
			if(card.rank == 'ACE') {
				numAces++
			}
		})
		return numAces
	}

	evaluateHand() {
		var sum = this.sumHand()
		this.values = []
		for(var i = 0; i <= this.numberOfAces(); i++) {
			this.values.push(sum - i*10)
		}
		this.checkforBust()
	}

	checkforBust() {
		var busted = true
		this.values.forEach(function(value) {
			if(value < 22) {
				busted = false
			}
		})
		this.busted = busted
	}

}