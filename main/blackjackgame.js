class BlackjackGame {
	
	constructor(ante) {
		this.deck
		this.players = []
		this.dealerHand
		this.ante = ante
		this.dealerHandDisplay = document.getElementById("dealer-hand")
		this.userHandDisplay = document.getElementById("user-hand")
		this.dealerScoreDisplay = document.getElementById("dealer-score")
		this.userScoreDisplay = document.getElementById("user-score")
		this.hitButton = document.getElementById("Hit")
		this.stayButton = document.getElementById("Stay")
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
		this.hitButton.disabled = false
		this.stayButton.disabled = false
		this.players.forEach(function(player) {
			self.makeChoices(player)
		})
		this.dealerAction()
	}

	makeChoices(player) {
		this.hitButton.onclick = function(player) {
			player.hand.hit(this.deck.dealCard())
		}
		this.stayButton.onclick = function() {
			document.getElementById("Hit").disabled = true
			document.getElementById("Stay").disabled = true
		}
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

}