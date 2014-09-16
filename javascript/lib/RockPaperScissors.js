// GAME

var PAIRS = {
	rock: {beats: 'scissors'},
	paper: {beats: 'rock'},
	scissors: {beats: 'paper'},
}

function Game(player1, player2) {
	// defining the Game class.
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	// in Ruby, the last line in a method is the return value.
	// not so in JS! You have to return it manually, like below.
	if(this.same_pick() === true) {
		return null;
	}
	if(PAIRS[this.player1.pick].beats === this.player2.pick){
		return this.player1;
	}
	else {
		return this.player2;
	}
};

Game.prototype.same_pick = function() {
	if(this.player1.pick === this.player2.pick){
		return true;
	}
};


// PLAYER

function Player(name) {
	// here, function is acting like 'class' in Ruby.
	// this is defining the Player class.
	// an initialize method goes here.
	this.name = name; // use 'this' instead of Ruby '@'
}

// in JS, you define methods *outside* of classes. Weird!
// you use function() for defining methods, too.
// we're defining a method below, using this prototype thing.
Player.prototype.picks = function(pick) {
	this.pick = pick;
};

