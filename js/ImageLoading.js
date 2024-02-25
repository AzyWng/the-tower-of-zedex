var scanlineFilter=document.createElement("img");
var mapSpriteSheet=document.createElement("img");

var playerFacingDown=document.createElement("img");
var playerFacingLeft=document.createElement("img");
var playerFacingRight=document.createElement("img");
var playerFacingUp=document.createElement("img");
var playerSprites=document.createElement("img");

var zombieSprite1=document.createElement("img");
var zombieSprite2=document.createElement("img");
var ghostSprite1=document.createElement("img");
var ghostSprite2=document.createElement("img");
var wallHuggerSprite1=document.createElement("img");
var wallHuggerSprite2=document.createElement("img");


var healthIcon=document.createElement("img");
var boomstickIcon=document.createElement("img");
var swordIcon=document.createElement("img");

var bullet0=document.createElement("img");
var bullet1=document.createElement("img");
var bullet2=document.createElement("img");


//var keyPickup=document.createElement("img");
//var pickupIcons=document.createElement("img");
var pickupPotion=document.createElement("img");
var pickupAmmo=document.createElement("img");
var pickupKey=document.createElement("img");
var pickupMasterKey=document.createElement("img");
var pickupSpellScroll=document.createElement("img");


var tilePics = [];

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad == 0) { // last image loaded?
		loadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload=countLoadedImageAndLaunchIfReady;
	imgVar.src="images/"+fileName;
}

function loadImageForTileCode(tileCode, fileName) {
  tilePics[tileCode] = document.createElement("img");
  beginLoadingImage(tilePics[tileCode],fileName);
}

function loadImages() {

  	var imageList = [
		{varName:scanlineFilter, theFile:"scanline-filter.png"},
		{varName:mapSpriteSheet, theFile:"mapSpriteSheet.png"},
		

		{varName:playerFacingDown, theFile:"warrior_down.png"},
		{varName:playerFacingLeft, theFile:"warrior_left.png"},
		{varName:playerFacingRight, theFile:"warrior_right.png"},
		{varName:playerFacingUp, theFile:"warrior_up.png"},
		{varName:playerSprites, theFile:"playerSpriteSheet.png"},

		{varName:zombieSprite1, theFile:"zombieSprite_1.png"},
		{varName:zombieSprite2, theFile:"zombieSprite_2.png"},
		{varName:ghostSprite1, theFile:"ghostSprite_1.png"},
		{varName:ghostSprite2, theFile:"ghostSprite_2.png"},
		{varName:wallHuggerSprite1, theFile:"wall_hugger_1.png"},
		{varName:wallHuggerSprite2, theFile:"wall_hugger_2.png"},

		{varName:healthIcon, theFile:"health_icon.png"},
		{varName:boomstickIcon, theFile:"boomstick_icon.png"},
		{varName:swordIcon, theFile:"sword_icon.png"},

		{varName:bullet0, theFile:"boomstickBullet_0.png"},
		{varName:bullet1, theFile:"boomstickBullet_1.png"},
		{varName:bullet2, theFile:"boomstickBullet_2.png"},

		//{varName:pickupIcons, theFile:"pickupIcons.png"},
		{varName:pickupPotion, theFile:"pickup_potion.png"},
		{varName:pickupAmmo, theFile:"pickup_ammo.png"},
		{varName:pickupKey, theFile:"pickup_key.png"},
		{varName:pickupMasterKey, theFile:"pickup_masterKey.png"},
		{varName:pickupSpellScroll, theFile:"pickup_spell_scroll.png"},
		
		{tileType:TILE_GROUND, theFile:"world_ground.png"},
		{tileType:TILE_WALL, theFile:"world_wall.png"},
		{tileType:TILE_GOAL, theFile:"world_stairs.png"},
		{tileType:TILE_KEY, theFile:"pickup_key.png"},
		{tileType:TILE_DOOR, theFile:"world_door.png"},
		{tileType:TILE_SPIKE, theFile:"world_spike.png"},
		{tileType:TILE_POTION, theFile:"pickup_potion.png"},
		{tileType:TILE_AMMO, theFile:"pickup_ammo.png"},
		{tileType:TILE_MASTER_KEY, theFile:"pickup_masterKey.png"},
		{tileType:TILE_CHEST, theFile:"chest.png"},

		{tileType:TILE_CRYPT_WALL1, theFile:"crypt_wall1.png"},
		{tileType:TILE_CRYPT_WALL2, theFile:"crypt_wall2.png"},
		{tileType:TILE_CRYPT_WALL3, theFile:"crypt_wall3.png"},
		{tileType:TILE_CRYPT_DAMAGE_FLOOR, theFile:"crypt_damageFloor.png"},

		//Row 1: mapSpriteSheet
		//OPEN
		{tileType: TILE_CHEST,                  	theFile: "mapSpriteSheet.png", locX: 32, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_CHEST_OPEN,             	theFile: "mapSpriteSheet.png", locX: 64, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_GOAL,                   	theFile: "mapSpriteSheet.png", locX: 96, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_MASTERDOOR_FACING_DOWN,     theFile: "mapSpriteSheet.png", locX: 128, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_MASTERDOOR_FACING_UP,       theFile: "mapSpriteSheet.png", locX: 160, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_MASTERDOOR_FACING_LEFT,     theFile: "mapSpriteSheet.png", locX: 192, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_MASTERDOOR_FACING_RIGHT,    theFile: "mapSpriteSheet.png", locX: 224, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_BRIDGE,                     theFile: "mapSpriteSheet.png", locX: 256, locY: 0, width: 32, height: 32, offSetX: 0, offSetY: 0},
		//OPEN


		//Row 2: mapSpriteSheet
		{tileType: TILE_DOOR_FACING_DOWN,           theFile: "mapSpriteSheet.png", locX:  0, locY: 32, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_DOOR_FACING_UP,             theFile: "mapSpriteSheet.png", locX: 32, locY: 32, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_DOOR_FACING_LEFT,           theFile: "mapSpriteSheet.png", locX: 64, locY: 32, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_DOOR_FACING_RIGHT,       	theFile: "mapSpriteSheet.png", locX: 96, locY: 32, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_BLOCK,         				theFile: "mapSpriteSheet.png", locX: 128, locY: 32, width: 32, height: 32, offSetX: 0, offSetY: 0},
		//OPEN
		//OPEN
		//OPEN
		//OPEN
		//OPEN


		//Row 3: mapSpriteSheet
		{tileType: TILE_CRYPT_WALL1,             	theFile: "mapSpriteSheet.png", locX:  0, locY: 64, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_CRYPT_WALL2,             	theFile: "mapSpriteSheet.png", locX: 32, locY: 64, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_CRYPT_WALL3,                theFile: "mapSpriteSheet.png", locX: 64, locY: 64, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_SKULLS,       				theFile: "mapSpriteSheet.png", locX: 96, locY: 64, width: 32, height: 32, offSetX: 0, offSetY: 0},
		//OPEN
		//OPEN
		//OPEN
		//OPEN
		{tileType: TILE_CRYPT_DAMAGE_FLOOR1,        theFile: "mapSpriteSheet.png", locX: 256, locY: 64, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_CRYPT_DAMAGE_FLOOR2,        theFile: "mapSpriteSheet.png", locX: 288, locY: 64, width: 32, height: 32, offSetX: 0, offSetY: 0},


		//Row 4: mapSpriteSheet
		{tileType: TILE_GARDEN_WALL1,               theFile: "mapSpriteSheet.png", locX:  0, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_GARDEN_WALL2,     			theFile: "mapSpriteSheet.png", locX: 32, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_GARDEN_WALL3,               theFile: "mapSpriteSheet.png", locX: 64, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_GRASS,       				theFile: "mapSpriteSheet.png", locX: 96, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_BUSH_TOP,      				theFile: "mapSpriteSheet.png", locX: 128, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_BUSH_BOTTOM,       			theFile: "mapSpriteSheet.png", locX: 160, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		//OPEN
		//OPEN
		{tileType: TILE_GARDEN_WATER1,         		theFile: "mapSpriteSheet.png", locX: 256, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_GARDEN_WATER2,             	theFile: "mapSpriteSheet.png", locX: 288, locY: 98, width: 32, height: 32, offSetX: 0, offSetY: 0},


		//Row 5: mapSpriteSheet
		{tileType: TILE_TREE_TOPLEFT,          	theFile: "mapSpriteSheet.png", locX:  0, locY: 128, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_TREE_TOPRIGHT,         	theFile: "mapSpriteSheet.png", locX: 32, locY: 128, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_TREE_MIDLEFT,          	theFile: "mapSpriteSheet.png", locX: 64, locY: 128, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_TREE_MIDRIGHT,       	theFile: "mapSpriteSheet.png", locX: 96, locY: 128, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_TREE_BOTLEFT,       	theFile: "mapSpriteSheet.png", locX: 128, locY: 128, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_TREE_BOTRIGHT,       	theFile: "mapSpriteSheet.png", locX: 160, locY: 128, width: 32, height: 32, offSetX: 0, offSetY: 0},
		//OPEN
		//OPEN
		//OPEN
		//OPEN


		//Row 6: mapSpriteSheet
		{tileType: TILE_UNDERWORLD_WALL1,       theFile: "mapSpriteSheet.png", locX:  0, locY: 160, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_UNDERWORLD_WALL2,       theFile: "mapSpriteSheet.png", locX: 32, locY: 160, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_UNDERWORLD_WALL3,       theFile: "mapSpriteSheet.png", locX: 64, locY: 160, width: 32, height: 32, offSetX: 0, offSetY: 0},
		//OPEN
		//OPEN
		//OPEN
		//OPEN
		//OPEN
		{tileType: TILE_LAVA1,                  theFile: "mapSpriteSheet.png", locX: 256, locY: 160, width: 32, height: 32, offSetX: 0, offSetY: 0},
		{tileType: TILE_LAVA2,                  theFile: "mapSpriteSheet.png", locX: 288, locY: 160, width: 32, height: 32, offSetX: 0, offSetY: 0},

	];

  	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		if(imageList[i].tileType != undefined) {
		loadImageForTileCode(imageList[i].tileType, imageList[i].theFile);
		} else {
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} // end of else
	} // end of for imageList

} // end of function loadImages
