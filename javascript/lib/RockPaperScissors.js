function Player(name) {
	// here, function is acting like 'class' in Ruby.
	// this is defining the Player class.
	// an initialize method goes here.
	this.name = name; // use 'this' instead of Ruby '@'
}

function Game(player1, player2) {
	// defining the Game class.
	this.player1 = player1;
	this.player2 = player2;
}

// in JS, you define methods *outside* of classes. Weird!
// you use function() for defining methods, too.
// we're defining a method below, using this prototype thing.
Player.prototype.picks = function(pick) {
	// body...
};

Game.prototype.winner = function() {
	// in Ruby, the last line in a method is the return value.
	// not so in JS! You have to return it manually, like below.
	return this.player1;
};