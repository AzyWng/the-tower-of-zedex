
function enemyClass() {
	this.enemyType;
	
	this.x = 0;
	this.y = 0;
	this.speed = 2.0;
	
	// Stats
	this.readyToRemove =    false;
	this.maxHealth =      3;
	this.health =         0;
	this.attackDamage =   3;

	// Direction
	this.direction =  'south';
	this.walkNorth =  false;
	this.walkEast =   false;
	this.walkSouth =  true;
	this.walkWest =   false;

	// Move frequency
	this.ticksFromLastMovement =	0;
	this.ticksUntilNextMovement =	2;
	this.ticksFromLastDirectionChange = 0;
	this.ticksUntilDirectionChange = 60;

	this.distanceToChase = 100;
	this.chasePlayer = false;

	// Animation stuff
	this.sprite;
	this.frameIndex =      0;
	this.tickCount =       0;
	this.ticksPerFrame =  15;


	this.init = function( enemyPic ) {
		this.health = this.maxHealth;
		this.readyToRemove = false;
		this.sprite = enemyPic;
		this.reset();
	}

	this.reset = function(resetX, resetY) {

		for(var i=0; i<roomGrid.length; i++) {
			if( roomGrid[i] == TILE_ZOMBIE) {
				var tileRow = Math.floor(i/ROOM_COLS);
				var tileCol = i%ROOM_COLS;
				this.homeX = tileCol * TILE_W + 0.5*TILE_W;
				this.homeY = tileRow * TILE_H + 0.5*TILE_H;
				roomGrid[i] = TILE_GROUND;
				break; // found it, so no need to keep searching 
			} // end of if
		}
		this.x = this.homeX;
		this.y = this.homeY;

		this.health =   this.maxHealth;
		this.readyToRemove =  false;
	}



	this.changeDirection = function(direction) {
		if( direction != undefined ) {
			this.direction = direction;
			return;
		}
		var randomDirection = Math.ceil(Math.random()*4);
		
		if (randomDirection == 1)		{this.direction = 'north'}
		else if (randomDirection == 2)	{this.direction = 'east'}
		else if (randomDirection == 3)	{this.direction = 'south'}
		else if (randomDirection == 4)	{this.direction = 'west'}
		else { 
			console.log('random direction error', randomDirection, "default direction to south");
			this.direction = 'south'
		}
	}

		

	this.move = function() {	

		// working on a chase movement pattern
		if( Math.abs(this.x - p1.x) <= this.distanceToChase ) {
			this.chasePlayer = true;
		} else { this.chasePlayer = false; }

		if( this.chasePlayer == true ) {
			if( p1.x > this.x ) {
				this.changeDirection('east');
			} else if( p1.y > this.y ) {
				this.changeDirection('north');
			} else if( p1.x < this.x ) {
				this.changeDirection('west');
			} else {
				this.changeDirection('south');
			}
		}

		var nextX = this.x;
		var nextY = this.y;
		var nextTileX = this.x;
		var nextTileY = this.y;

			
		// next X/Y depending on direction
		if(this.direction == 'north') {
			nextY -= this.speed;
			nextTileY = this.y-1;
		}
		if(this.direction == 'east') {
			nextX += this.speed;
			nextTileX = this.x + TILE_W;
		}
		if(this.direction == 'south') {
			nextY += this.speed;
			nextTileY = this.y + TILE_H;
		}
		if(this.direction == 'west') {
			nextX -= this.speed;
			nextTileX = this.x - 1;
		}

		var walkIntoTileIndex = getTileIndexAtPixelCoord(nextTileX,nextTileY);
		var walkIntoTileType = TILE_WALL;
		
		if( walkIntoTileIndex != undefined) {
			walkIntoTileType = roomGrid[walkIntoTileIndex];
		}

		switch( walkIntoTileType ) {
			case TILE_GROUND:
				this.x = nextX;
				this.y = nextY;
				break;
			case TILE_GOAL:
				this.x = nextX;
				this.y = nextY;
				break;
			case TILE_KEY:
				this.x = nextX;
				this.y = nextY;
				break;
			case TILE_SPIKE:
				this.x = nextX;
				this.y = nextY;
				break;
			case TILE_WALL:
			default:
				// any other tile type number was found... do nothing, for now
				break;
		}
		this.ticksFromLastMovement = 0;
		
		
	}

	this.draw = function() {
		// drawRect(this.x, this.y, 32,32, 3, 'green');

		this.tickCount++;
		if(this.tickCount == this.ticksPerFrame){
			this.tickCount = 0;
			if(this.sprite == zombieSprite1){
				this.sprite = zombieSprite2;
			} else { this.sprite = zombieSprite1 }
		}
		
		canvasContext.drawImage( this.sprite, this.x-16, this.y-16 );
		colorRect(this.x, this.y, 2,2, "yellow")
	}

	

	


}