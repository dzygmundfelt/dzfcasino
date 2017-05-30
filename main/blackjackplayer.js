

class BlackjackPlayer {

	constructor(chips) {
		this.chips = chips
		this.hand
	}

	buyIn(ante) {
		this.chips -= ante
	}

	playerChoice() {
		this.hand.toString()
		return prompt("Would you like to hit or stay?")
	}

	payOut(pot) {
		this.chips += pot
	}
}