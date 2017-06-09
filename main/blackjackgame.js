class BlackjackGame {

	constructor(ante) {
		this.deck
		this.players = []
		this.finalPlayer
		this.dealerHand
		this.ante = ante
		this.hitButton
		this.stayButton
		this.dealerHandDisplay = document.getElementById("dealer-hand")
		this.userHandDisplay = document.getElementById("user-hand")
		this.dealerScoreDisplay = document.getElementById("dealer-score")
		this.userScoreDisplay = document.getElementById("user-score")
	}

	addPlayer(player) {
		this.players.push(player)
	}

	playRound() {
		this.deck = new Deck()
		this.finalPlayer = this.players[this.players.length-1]
		this.setButtons()
		this.dealCards()
		this.action()
		this.resolve()
	}

	setButtons() {
		this.hitButton = document.getElementById("Hit")
		this.stayButton = document.getElementById("Stay")
	}

	dealCards() {
		this.dealerHand = new BlackjackHand(this.deck.dealCard(), this.deck.dealCard())
		this.dealerHandDisplay.innerHTML = this.dealerHand.cards[0].print()
		this.dealerScoreDisplay.innerHTML = "dealer is showing " + this.dealerHand.cards[0].getValue()
		let self = this
		this.players.forEach(function(player) {
			player.hand = new BlackjackHand(self.deck.dealCard(), self.deck.dealCard())
			self.userHandDisplay.innerHTML = player.hand.showHand()
			self.userScoreDisplay.innerHTML = player.hand.bestValue
		})
	}

	action() {
		let self = this
		this.players.forEach(function(player) {
			self.hitButton.disabled = 'false'
			self.stayButton.disabled = 'false'
			self.playerTurn(player)}
		)
	}

	playerTurn(player) {
		let self = this
		this.hitButton.onclick = function(player) {
			player.hand.hit(self.deck.dealCard())
		}
		this.stayButton.onclick = function() {
			callNextPlayer(player)
		}
	}

	callNextPlayer(player) {
		if(player === this.finalPlayer) {
			this.dealerAction()
		}
		let playerIndex = 0
		while(this.players[playerIndex] !== player) {
			playerIndex++
		}
		playerTurn(this.players[++playerIndex])
	}

	dealerAction() {
		this.dealerHandDisplay.innerHTML = this.dealerHand.showHand()
		this.dealerScoreDisplay.innerHTML = "Dealer is showing " + this.dealerHand.bestValue
		while(!this.dealerHand.busted && this.dealerHand.bestValue < 17) {
			this.dealerHand.hit(this.deck.dealCard())
			this.dealerHandDisplay.innerHTML = this.dealerHand.showHand()
			this.dealerScoreDisplay.innerHTML = "Dealer is showing " + this.dealerHand.bestValue
		}
	}

	resolve() {
		let self = this
		this.players.forEach(function(player) {
			if(!player.hand.busted && (self.dealerHand.busted || player.hand.bestValue > self.dealerHand.bestValue)) {
				player.payOut(self.ante*2)
				self.userScoreDisplay.innerHTML = "Player wins with a score of " + player.hand.bestValue
			} else {
				self.dealerScoreDisplay.innerHTML = "Dealer wins with a score of " + self.dealerHand.bestValue
			}
		})
	}

	// clear() {
	// 	document.getElementById("dealer-hand")
	// 	this.userHandDisplay = document.getElementById("user-hand")
	// 	this.dealerScoreDisplay = document.getElementById("dealer-score")
	// 	this.userScoreDisplay = document.getElementById("user-score")
	// }

}
