describe("blackjackgame", function() {
	var game

	beforeEach(function() {
		game = new BlackjackGame(100)
	});

	it("adds players", function() {
		player1 = new BlackjackPlayer(1000)
		player2 = new BlackjackPlayer(1000)

		game.addPlayer(player1)
		game.addPlayer(player2)

		expect(game.players.length).toBe(2)
	});

	it("deals cards to dealer", function() {
		game.deck = new Deck()
		game.dealCards()

		expect(game.dealerHand.cards.length).toBe(2)
	});

	it("dealer hits on 16", function() {
		game.deck = new Deck()
		game.dealerHand = new BlackjackHand(new Card('7','SPADES'), new Card('9','CLUBS'))
		game.dealerAction()

		expect(game.dealerHand.cards.length).toBe(3)
	});
});