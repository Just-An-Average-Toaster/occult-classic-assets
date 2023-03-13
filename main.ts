namespace SpriteKind {
    export const hospitaldoor = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.hospitaldoor, function (sprite, otherSprite) {
    tileUtil.unloadTilemap()
    tiles.setCurrentTilemap(tilemap`Hosptial_Interior`)
    Tomothy_Map.x = 23
    Tomothy_Map.y = 19
})
let Tomothy_Map: Sprite = null
tiles.setCurrentTilemap(tilemap`cityEnemy`)
Tomothy_Map = sprites.create(assets.image`Tomothy`, SpriteKind.Player)
controller.moveSprite(Tomothy_Map)
scene.cameraFollowSprite(Tomothy_Map)
let Hospitalinterior = tilemap`Hosptial_Interior`
let city = tilemap`cityEnemy0`
tileUtil.createSpritesOnTiles(assets.tile`Door0`, assets.image`doorimg`, SpriteKind.hospitaldoor)
tileUtil.createSpritesOnTiles(assets.tile`Door1`, assets.image`doorimg0`, SpriteKind.hospitaldoor)
tileUtil.connectMaps(city, Hospitalinterior, MapConnectionKind.Door1)
