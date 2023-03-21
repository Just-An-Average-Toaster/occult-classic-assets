namespace SpriteKind {
    export const hospitaldoor = SpriteKind.create()
    export const Building = SpriteKind.create()
}
function place_buildings () {
    tileUtil.createSpritesOnTiles(assets.tile`thing2`, assets.image`building2`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`thing`, assets.image`building3`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile1`, assets.image`building4`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, assets.image`building5`, SpriteKind.Building)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.hospitaldoor, function (sprite, otherSprite) {
    if (inhospital == 0) {
        tileUtil.unloadTilemap()
        tiles.setCurrentTilemap(tilemap`Hosptial_Interior`)
        Tomothy_Map.y = 374
        Tomothy_Map.x = 320
        inhospital = 1
        makedoorswork()
    } else if (inhospital == 1) {
        tileUtil.unloadTilemap()
        tiles.setCurrentTilemap(tilemap`cityEnemy3`)
        Tomothy_Map.y = 600
        Tomothy_Map.x = 256
        inhospital = 0
        makedoorswork()
        place_buildings()
    }
})
function makedoorswork () {
    sprites.destroyAllSpritesOfKind(SpriteKind.hospitaldoor)
    tileUtil.createSpritesOnTiles(assets.tile`Door0`, assets.image`doorimg`, SpriteKind.hospitaldoor)
    tileUtil.createSpritesOnTiles(assets.tile`Door1`, assets.image`doorimg0`, SpriteKind.hospitaldoor)
}
let inhospital = 0
let Tomothy_Map: Sprite = null
tiles.setCurrentTilemap(tilemap`cityEnemy3`)
Tomothy_Map = sprites.create(assets.image`Tomothy`, SpriteKind.Player)
controller.moveSprite(Tomothy_Map)
scene.cameraFollowSprite(Tomothy_Map)
place_buildings()
let Hospitalinterior = tilemap`Hosptial_Interior`
let city = tilemap`cityEnemy3`
makedoorswork()
tileUtil.connectMaps(city, Hospitalinterior, MapConnectionKind.Door1)
