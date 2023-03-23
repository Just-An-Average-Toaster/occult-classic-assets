namespace SpriteKind {
    export const hospitaldoor = SpriteKind.create()
    export const Building = SpriteKind.create()
    export const cultHQENtrance = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Tomothy_Map.setImage(assets.image`Tomothyup`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cultHQENtrance, function (sprite, otherSprite) {
    if (incult == 0) {
    	
    } else if (incult == 1) {
    	
    }
})
function place_buildings () {
    tileUtil.createSpritesOnTiles(assets.tile`thing2`, assets.image`building2`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`thing`, assets.image`building3`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile1`, assets.image`building4`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, assets.image`building5`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile2`, assets.image`gasstation`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile3`, assets.image`gaspump`, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile6`, assets.image`Cult House`, SpriteKind.Building)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Tomothy_Map.setImage(assets.image`Tomothy Side L`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Tomothy_Map.setImage(assets.image`Tomothy Side R`)
})
function destroybuildings () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Building)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Tomothy_Map.setImage(assets.image`Tomothy`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hospitaldoor, function (sprite, otherSprite) {
    if (inhospital == 0) {
        tileUtil.unloadTilemap()
        tiles.setCurrentTilemap(tilemap`Hosptial_Interior`)
        Tomothy_Map.y = 374
        Tomothy_Map.x = 320
        inhospital = 1
        makedoorswork()
        destroybuildings()
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
    if (incult == 0) {
        tileUtil.createSpritesOnTiles(assets.tile`Door0`, assets.image`doorimg`, SpriteKind.hospitaldoor)
        tileUtil.createSpritesOnTiles(assets.tile`Door1`, assets.image`doorimg0`, SpriteKind.hospitaldoor)
    }
    if (inhospital == 0) {
        tileUtil.createSpritesOnTiles(assets.tile`teleporter0`, assets.image`trashcan`, SpriteKind.cultHQENtrance)
    }
}
let inhospital = 0
let incult = 0
let Tomothy_Map: Sprite = null
tiles.setCurrentTilemap(tilemap`cityEnemy3`)
Tomothy_Map = sprites.create(assets.image`Tomothy`, SpriteKind.Player)
controller.moveSprite(Tomothy_Map)
scene.cameraFollowSprite(Tomothy_Map)
place_buildings()
let Hospitalinterior = tilemap`Hosptial_Interior`
let city = tilemap`cityEnemy3`
makedoorswork()
incult = 0
tileUtil.connectMaps(city, Hospitalinterior, MapConnectionKind.Door1)
