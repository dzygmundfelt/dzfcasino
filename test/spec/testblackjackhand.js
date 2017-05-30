describe("blackjack hand", function() {

	it("has value upon initiation", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))

		expect(hand.bestValue).toBe(12)
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

	it("has multiple possible values with ace", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))
		hand.hit(new Card('ACE','HEARTS'))

		expect(hand.values.length).toBe(2)
	});

	it("doesn't bust due to ace's flexibility", function() {
		var hand = new BlackjackHand(new Card('8','CLUBS'), new Card('4','SPADES'))
		hand.hit(new Card('ACE','DIAMONDS'))

		expect(hand.busted).toBe(false)
	});

	it("has correct value after multiple hits", function() {
		var hand = new BlackjackHand(new Card('3','CLUBS'), new Card('4','SPADES'))
		hand.hit(new Card('5','CLUBS'))
		hand.hit(new Card('9','HEARTS'))

		expect(hand.bestValue).toBe(21)
	});

	it("has correct bestValue with multiple values", function() {
		var hand = new BlackjackHand(new Card('3','CLUBS'), new Card('4','SPADES'))
		hand.hit(new Card('5','CLUBS'))
		hand.hit(new Card('ACE','HEARTS'))

		expect(hand.bestValue).toBe(13)
	});

	it("shows hand properly", function() {
		var hand = new BlackjackHand(new Card('3','CLUBS'), new Card('4','SPADES'))

		expect(hand.showHand()).toBe('| 3 of CLUBS | 4 of SPADES | ')
	});

});