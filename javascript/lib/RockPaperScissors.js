function Player() {
	// here, function is acting like 'class' in Ruby.
	// this is defining the Player class.
}

function Game() {
	// defining the Game class.
}

// in JS, you define methods *outside* of classes. Weird!
// you use function() for defining methods, too.
// we're defining a method below, using this prototype thing.
Player.prototype.picks = function(pick) {
	// body...
};

Game.prototype.winner = function(first_argument) {
	// body...
};