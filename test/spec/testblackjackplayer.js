describe("blackjackplayer", function() {

	it("has correct chips after buy-in", function() {
		var player = new BlackjackPlayer(1000)
		player.buyIn(25)

		expect(player.chips).toBe(975)
	});

	it("has correct chips after pay-out", function() {
		var player = new BlackjackPlayer(1000)
		player.payOut(100)

		expect(player.chips).toBe(1100)
	});

});