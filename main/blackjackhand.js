class BlackjackHand {

	constructor(card1,card2) {
		this.cards = []
		this.cards.push(card1)
		this.cards.push(card2)

		this.busted = false

		this.values = []
		this.bestValue
		this.evaluateHand()
	}

	hit(card) {
		this.cards.push(card)
		this.evaluateHand()
	}

	sumHand() {
		var sum = 0
		for(var i = 0; i < this.cards.length; i++) {
			sum += this.cards[i].getValue()
		}
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
		this.getBestValue()
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

	getBestValue() {
		var best = 0
		for(var i = 0; i < this.values.length; i++) {
			if(this.values[i] < 22 && this.values[i] > best) {
				best = this.values[i]
			}
		}
		this.bestValue = best
	}

}