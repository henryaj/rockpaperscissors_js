// GAME

var BEATS = {
	rock: 		{play: ['scissors', 'lizard'], 	verb: ['blunts','crushes']			 },
	paper: 		{play: ['rock', 'spock'], 			verb: ['covers','disproves']		 },
	scissors: {play: ['lizard', 'paper'], 		verb: ['decapitates','cuts']			 },
	lizard:   {play: ['spock', 'paper'], 			verb: ['poisons','eats']				 },
	spock:    {play: ['scissors', 'rock'], 		verb: ['incinerates','vaporises'] }
}



function Game(player1, player2) {
	// defining the Game class.
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	// in Ruby, the last line in a method is the return value.
	// not so in JS! You have to return it manually, like below.
	if(this.isSamePick() === true) {
		return null;
	}
	if(_.contains((BEATS[this.player1.pick]).play, this.player2.pick)){
		return this.player1;
	}
	else {
		return this.player2;
	}
};	

Game.prototype.loser = function() {
	if(this.winner() === this.player1){
		return this.player2;
	}
	else {
		return this.player1;
	}
};

Game.prototype.isSamePick = function() {
	if(this.player1.pick === this.player2.pick){
		return true;
	}
};

Game.prototype.winningVerb = function() {
	if(BEATS[this.winner().pick].play[0] === this.loser().pick){
		return BEATS[this.winner().pick].verb[0]
	}
	else {
		return BEATS[this.winner().pick].verb[1]	
	}
};

Game.prototype.winningMessage = function() {
	if(this.isSamePick() === true) {
		return "Draw!";
	}
	else {
		return ((this.winner()).name + " " + this.winningVerb() + " " + (this.loser()).name);
	};
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

