// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a001c0001010101010101000000010000000000010000000100000000000100000001000000000001000000010000000000010000000100000000000100000001010000010101000000000100000100000000000001000001000000000000010000010001010101000100000101000000010001000000000000000100010000000000000001000100000101000000010001000001000101010100010000010000000000000100000100010101010001000001010000000100010000000000000001000100000000000000010001000001010000000100010000010001010101010100000101000000000100000000010000000001000000000100000000010000000001000000000100000000010000000001010101010100000000`, img`
2 2 2 2 2 2 2 . . . 
2 . . . . . 2 . . . 
2 . . . . . 2 . . . 
2 . . . . . 2 . . . 
2 . . . . . 2 . . . 
2 . . . . . 2 . . . 
2 2 . . 2 2 2 . . . 
. 2 . . 2 . . . . . 
. 2 . . 2 . . . . . 
. 2 . . 2 . 2 2 2 2 
. 2 . . 2 2 . . . 2 
. 2 . . . . . . . 2 
. 2 . . . . . . . 2 
. 2 . . 2 2 . . . 2 
. 2 . . 2 . 2 2 2 2 
. 2 . . 2 . . . . . 
. 2 . . 2 . 2 2 2 2 
. 2 . . 2 2 . . . 2 
. 2 . . . . . . . 2 
. 2 . . . . . . . 2 
. 2 . . 2 2 . . . 2 
. 2 . . 2 . 2 2 2 2 
2 2 . . 2 2 . . . . 
2 . . . . 2 . . . . 
2 . . . . 2 . . . . 
2 . . . . 2 . . . . 
2 . . . . 2 . . . . 
2 2 2 2 2 2 . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
