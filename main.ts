info.onCountdownEnd(function () {
    effects.confetti.startScreenEffect()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    music.powerDown.play()
})
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . d d d d d d d d d d d . . . 
    . . d d d 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 3 3 3 3 3 5 5 5 5 . 
    5 5 5 3 3 3 3 3 3 3 3 3 5 5 5 . 
    5 5 5 3 3 f 3 3 3 3 f 3 3 5 5 . 
    5 5 3 3 3 3 3 f 3 3 3 3 3 5 5 5 
    5 3 3 3 3 3 3 3 3 3 3 3 3 3 5 5 
    5 3 3 3 3 f f 3 f f 3 3 3 5 5 5 
    5 5 3 3 3 3 f f f 3 3 3 5 5 5 5 
    5 5 5 5 3 3 3 3 3 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
info.setScore(0)
let mySprite2 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let mySprite3 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let mySprite4 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let my_sprite_5 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let my_sprite_6 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff1111bff.......
    .......fb1111111bf......
    .......f111111111f......
    ......fd1111111ffff.....
    ......fd111dd1c111bf....
    ......fb11fcdf1b1bff....
    ......f11111bfbfbff.....
    ......f1b1bdfcffff......
    ......fbfbfcfcccf.......
    ......ffffffffff........
    .........ffffff.........
    .........ffffff.........
    .........fffffff..f.....
    ..........fffffffff.....
    ...........fffffff......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let mysprite_7 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let mysprite_8 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
let mysprite_9 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Food)
info.startCountdown(60)
effects.clouds.startScreenEffect()
tiles.setTilemap(tilemap`level1`)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
myEnemy.follow(mySprite, 30)
mySprite.setPosition(40, 40)
game.onUpdateInterval(5000, function () {
    mySprite2.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    mySprite4.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    mySprite3.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    my_sprite_5.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    my_sprite_6.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    mysprite_7.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    mySprite4.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    mysprite_8.setPosition(randint(0, 500), randint(0, 500))
})
game.onUpdateInterval(5000, function () {
    mysprite_9.setPosition(randint(0, 500), randint(0, 500))
})
forever(function () {
    music.playMelody("C - C G D G C D ", 120)
})
