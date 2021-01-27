// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020000010000000000000000000000020200000100000002000000000100000202000101000000000000000001010002020000000001010001010000000000020200000000000000000000000200000202000001000002000000000000000002020000000000000000000002020000020200000200000202000000000000000202010001000002020000000000000002020000000000000000000002020100020200000000020000000202000000000202000200000000000002000002000002020000000000000000010000000000020200010001000001000100000001000202020202020202020202020202020202`, img`
. . . . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . 2 . . . 
. . 2 2 . . . . . . . . 2 2 . . 
. . . . . 2 2 . 2 2 . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . . 2 . . 2 2 . . . . . . . . 
. 2 . 2 . . 2 2 . . . . . . . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . 2 . . . 2 2 . . . . . 
. . 2 . . . . . . 2 . . 2 . . . 
. . . . . . . . . 2 . . . . . . 
. . 2 . 2 . . 2 . 2 . . . 2 . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.rock2,sprites.castle.shrub], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
