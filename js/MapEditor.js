




 /*
	-draw the a blank tiled map
	-create image-buttons for each different tile
	-image-button stores Tile_id
	-click on blank map tiles to store value of tile at map-index
	-refresh map
	-when done editing a map, click --"CREATE MAP DATA"-- to display "text version" of Map data.
	-create more
	-when done editing, click --"Return To Title Screen"-- to leave Editor Mode
*/

var el_editorModeContainer = document.querySelector("#editor-mode");
el_editorModeContainer.style.display = "none";

var cleanMap =  [ 
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
        20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 
    ];

var freshMap = [ 
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  
    20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 
]


let storedTileValue = -1;

function setStoredTileValue(val) {
    storedTileValue = val;
    console.log(storedTileValue)

    return storedTileValue;
}

var imageList = [
// {varName: warriorPic, theFile: "warrior.png"},

    {varName:playerFacingDown, theFile:"warrior_down.png"},
	{varName:playerFacingLeft, theFile:"warrior_left.png"},
	{varName:playerFacingRight, theFile:"warrior_right.png"},
	{varName:playerFacingUp, theFile:"warrior_up.png"},
	{varName:playerSprites, theFile:"playerSpriteSheet.png"},
	{varName:healthIcon, theFile:"health_icon.png"},
	{varName:boomstickIcon, theFile:"boomstick_icon.png"},
	// {varName:swordIcon, theFile:"sword_icon.png"},
	// {varName:pickupIcons, theFile:"pickupIcons.png"},
	// {varName:zombieSprites, theFile:"zombieSprites.png"},
	
	{tileType:TILE_GROUND,          theFile:"images/world_ground.png",          tileValue: 0 },
	{tileType:TILE_WALL,            theFile:"images/world_wall.png",            tileValue: 1 },
	{tileType:TILE_GOAL,           theFile:"images/world_stairs.png",           tileValue: 3 },
	{tileType:TILE_KEY,             theFile:"images/pickup_key.png",            tileValue: 4 },
	{tileType:TILE_DOOR,            theFile:"images/world_door.png",            tileValue: 5 },
	{tileType:TILE_SPIKE,           theFile:"images/world_spike.png",           tileValue: 6 },
    {tileType:TILE_MASTER_KEY,      theFile:"images/pickup_masterKey.png",      tileValue: 7 },
    {tileType:TILE_AMMO,            theFile:"images/pickup_ammo.png",           tileValue: 8 },
    {tileType:TILE_POTION,          theFile:"images/pickup_potion.png",         tileValue: 9 },
	{tileType:TILE_CHEST,          theFile:"images/chest.png",                  tileValue: 10 },
	{tileType:TILE_FREEZE_SCROLL,  theFile:"images/pickup_spell_scroll.png",    tileValue: 12 },
	
	{tileType:TILE_CRYPT_WALL1,     theFile:"images/crypt_wall1.png",           tileValue: 20 },
	{tileType:TILE_CRYPT_WALL2,     theFile:"images/crypt_wall2.png",           tileValue: 21 },
	{tileType:TILE_CRYPT_WALL3,     theFile:"images/crypt_wall3.png",           tileValue: 22 },
	{tileType:TILE_CRYPT_DAMAGE_FLOOR, theFile:"images/crypt_damageFloor.png",  tileValue: 23 },

    //Row 1: GardenSpriteSheet
    {tileType: TILE_GARDEN_WALL1,               tileValue: 30,    theFile: "images/MapEditorSpecific/gardenWall1.png"},
    {tileType: TILE_GARDEN_WALL2,     			tileValue: 31,    theFile: "images/MapEditorSpecific/gardenWall2.png"},
    {tileType: TILE_GARDEN_WALL3,               tileValue: 32,    theFile: "images/MapEditorSpecific/gardenWall3.png"},
    {tileType: TILE_GRASS,       				tileValue: 33,    theFile: "images/MapEditorSpecific/grass.png"},
    {tileType: TILE_BUSH_TOP,      				tileValue: 34,    theFile: "images/MapEditorSpecific/bush-top.png"},
    {tileType: TILE_BUSH_BOTTOM,       			tileValue: 35,    theFile: "images/MapEditorSpecific/bush-bottom.png"},
    //OPEN
    //OPEN
    {tileType: TILE_GARDEN_WATER1,         		tileValue: 38,    theFile: "images/MapEditorSpecific/water.png"},
    

    //Row 2: 
    {tileType: TILE_TREE_TOPLEFT,          	tileValue: 40,    theFile: "images/MapEditorSpecific/tree-topLeft.png"},
    {tileType: TILE_TREE_TOPRIGHT,         	tileValue: 41,    theFile: "images/MapEditorSpecific/tree-topRight.png"},
    {tileType: TILE_TREE_MIDLEFT,          	tileValue: 42,    theFile: "images/MapEditorSpecific/tree-midLeft.png"},
    {tileType: TILE_TREE_MIDRIGHT,       	tileValue: 43,    theFile: "images/MapEditorSpecific/tree-midRight.png"},
    {tileType: TILE_TREE_BOTLEFT,       	tileValue: 44,    theFile: "images/MapEditorSpecific/tree-botLeft.png"},
    {tileType: TILE_TREE_BOTRIGHT,       	tileValue: 45,    theFile: "images/MapEditorSpecific/tree-botRight.png"},
    //OPEN
    //OPEN
    //OPEN
    //OPEN
];


function setupTileButtons() {
    let tileButtonContainer = document.getElementById('editor-mode');
    let htmlString = "";
    let i;
    for(i=7; i<imageList.length; i++) {
        htmlString += `<input id=${imageList[i].tileValue} type='image' src=${imageList[i].theFile} onClick="setStoredTileValue(${imageList[i].tileValue})"></input> `;
    } // end of Loop

    tileButtonContainer.innerHTML += htmlString;

    // Creates the Generate Level Button
    let btn = document.createElement('button');
    btn.innerHTML = 'Generate Level Data';
    btn.addEventListener('click', generateReadableMapData);
    tileButtonContainer.appendChild(btn);

    // Creates the Generate Garden Walls Button
    let garden_btn = document.createElement('button');
    garden_btn.innerHTML = 'Garden Walls';
    garden_btn.addEventListener('click', generateGardenWalls);
    tileButtonContainer.appendChild(garden_btn);

    // Creates the Clear Map Button
    let el_clearBtn = document.createElement('button');
    el_clearBtn.innerHTML = 'Clear Map';
    el_clearBtn.addEventListener('click', clearMapData);
    tileButtonContainer.appendChild(el_clearBtn);

}

function generateReadableMapData() {
    let freshMapText = roomGrid.slice()+'';
    let readableString ='[ ' + freshMapText.replace(/,/g , ",  ").replace(/  20,/g , " 20,") + ' ]';
    console.log(readableString)
    alert( readableString );
}

function generateGardenWalls() {
    
    for(var i = 0; i< roomGrid.length; i++) {
        if(roomGrid[i] == 20){
            var randNum0to2 = Math.floor(Math.random()*3);
            roomGrid[i] = 30+randNum0to2;
        }
    }
    
}

function clearMapData() {
    let newCleanMap = cleanMap.slice();
    if (confirm("You REALLY want to clear all tiles from the map?")) {
        freshMap = newCleanMap;
        console.log( "Map is CLEARED" )
    } else {
        return;
    }
}




