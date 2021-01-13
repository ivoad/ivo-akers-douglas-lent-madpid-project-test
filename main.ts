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
