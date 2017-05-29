class BlackjackGame {
	constructor() {
		this.deck
		this.players = []
		this.dealerHand
	}

	addPlayer(player) {
		this.players.push(player)
	}

	playRound() {
		this.deck = new Deck()
		this.dealCards()
	}

	dealCards() {
		this.dealerHand = new BlackjackHand(this.deck.dealCard(), this.deck.dealCard())
		this.players.forEach(function(player) {
			player.hand = new BlackjackHand(this.deck.dealCard(), this.deck.dealCard())
		})
	}

	action() {
		this.players.forEach(function(player) {
			playerChoice()
		})
		dealerAction()
	}
}