describe("blackjack hand", function() {

	it("has value upon initiation", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))

		expect(hand.values[0]).toBe(12)
	});

	it("has two cards upon initiation", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))

		expect(hand.cards.length).toBe(2)
	});

	it("isn't busted upon initiation", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))

		expect(hand.busted).toBe(false)
	});

	it("busts when over 21", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))
		hand.hit(new Card('KING','SPADES'))

		expect(hand.busted).toBe(true)
	});

	
});