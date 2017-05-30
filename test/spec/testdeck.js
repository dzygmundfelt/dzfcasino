describe("card", function() {

	var card
	var faceCard
	var ace

	beforeEach(function() {
		card = new Card('8','CLUBS')
		faceCard = new Card('KING','HEARTS')
		ace = new Card('ACE','DIAMONDS')
	});

	it("is not null", function() {
		expect(card).not.toBe(null)
	});

	it("prints correctly", function() {
		expect(card.print()).toBe('8 of CLUBS')
	});

	it("has correct value for number rank", function() {
		expect(card.getValue()).toBe(8)
	});

	it("has correct value for face card", function() {
		expect(faceCard.getValue()).toBe(10)
	});

	it("has correct value for ace", function() {
		expect(ace.getValue()).toBe(11)
	});

});


describe("deck", function() {

	var thisDeck

	beforeEach(function() {
		thisDeck = new Deck()
	});

	it("is not null", function() {
		expect(thisDeck).not.toBe(null)
	});

	it("contains 52 cards", function() {
		expect(thisDeck.cards.length).toBe(52);
	});

	it("is shuffled", function() {
		var card = thisDeck.dealCard()
		expect(card.rank).not.toBe('2')
		expect(card.suit).not.toBe('SPADES')
	});
});

