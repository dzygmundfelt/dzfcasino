class BlackjackGame {
	constructor(ante) {
		this.deck
		this.players = []
		this.dealerHand
		this.ante = ante
	}

	addPlayer(player) {
		this.players.push(player)
	}

	playRound() {
		this.deck = new Deck()
		this.dealCards()
		this.action()
		this.resolve()
	}

	dealCards() {
		this.dealerHand = new BlackjackHand(this.deck.dealCard(), this.deck.dealCard())
		this.players.forEach(function(player) {
			player.hand = new BlackjackHand(this.deck.dealCard(), this.deck.dealCard())
		})
	}

	action() {
		this.players.forEach(function(player) {
			while(player.playerChoice() === 'hit') {
				player.hand.hit(this.deck.dealCard())
			}
		})
		dealerAction()
	}

	dealerAction() {
		while(!this.dealerHand.busted && this.dealerHand.bestValue < 17) {
			this.dealerHand.hit(this.deck.dealCard())
		}
	}

	resolve() {
		this.players.forEach(function(player) {
			if(!player.hand.busted && (dealerHand.busted || player.hand.bestValue > dealerHand.bestValue)) {
				player.payOut(this.ante*2)
			} 
		})
	}

}