namespace SpriteKind {
    export const hospitaldoor = SpriteKind.create()
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
        tiles.setCurrentTilemap(tilemap`cityEnemy0`)
        Tomothy_Map.y = 600
        Tomothy_Map.x = 256
        inhospital = 0
        makedoorswork()
    }
})
function makedoorswork () {
    sprites.destroyAllSpritesOfKind(SpriteKind.hospitaldoor)
    tileUtil.createSpritesOnTiles(assets.tile`Door0`, assets.image`doorimg`, SpriteKind.hospitaldoor)
    tileUtil.createSpritesOnTiles(assets.tile`Door1`, assets.image`doorimg0`, SpriteKind.hospitaldoor)
}
let inhospital = 0
let Tomothy_Map: Sprite = null
tiles.setCurrentTilemap(tilemap`cityEnemy0`)
Tomothy_Map = sprites.create(assets.image`Tomothy`, SpriteKind.Player)
controller.moveSprite(Tomothy_Map)
scene.cameraFollowSprite(Tomothy_Map)
let Hospitalinterior = tilemap`Hosptial_Interior`
let city = tilemap`cityEnemy0`
makedoorswork()
tileUtil.connectMaps(city, Hospitalinterior, MapConnectionKind.Door1)
