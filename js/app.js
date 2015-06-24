// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	
	// Set initial location and speed
	this.x = 0;
	var tile = [60, 143, 226];
	this.y = tile[getRandomInt(0,3)];
	this.speed = getRandomInt(1,4) * 100;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x + dt * this.speed;
	if ((Math.abs(this.x - player.x)) < 30 && (Math.abs(this.y - player.y)) < 30) {
		player.reset();
	}
	if (this.x > 500) {
		this.x = -100;
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	// char image 
	this.character = 'images/char-cat-girl.png';
	
	//set initial location
	this.x = 200;
	this.y = 380;
};

Player.prototype.update = function() {
	this.x = this.x;
	this.y = this.y;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.character), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys) {
	if (allowedKeys === 'left') {
		// move left if player isn't already at x=0
		if (this.x > 99) {
			this.x -= 100;
		}
	} else if (allowedKeys === 'up') {
		// move up
		if (this.y > 83) {
			this.y -= 83;
		} else {
			// when player reaches top row, reset game and put player back to original position and increases game score
			star.x = 100;
			star.y = 0;
			this.reset();
		}
	} else if (allowedKeys === 'right') {
		// move right if player isn't already at x=4
		if (this.x < 400) {
			this.x += 100;
		}
	} else if (allowedKeys === 'down') {
		// move down if player isn't already at y=5
		if (this.y < 380) {
			this.y += 83;
		}
	}
};

Player.prototype.reset = function() {
	this.x = 200;
	this.y = 380;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var firstEnemy = new Enemy();
var secondEnemy = new Enemy();
var thirdEnemy = new Enemy();
var fourthEnemy = new Enemy();
var allEnemies = [firstEnemy, secondEnemy, thirdEnemy, fourthEnemy];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// use star class to keep track of scores
var Stars = function() {
	// every time the player reaches the water, a star will appear
	this.sprite = 'images/Star.png';
	this.x = -100;
	this.y = -100;
};

Stars.prototype.update = function() {
	this.x -= 2;
	this.y -= 2;
};

Stars.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var star = new Stars();

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
