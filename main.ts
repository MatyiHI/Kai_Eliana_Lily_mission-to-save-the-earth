namespace SpriteKind {
    export const PlayButton = SpriteKind.create()
    export const HelpButton = SpriteKind.create()
    export const dirr = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
})
scene.setBackgroundImage(assets.image`Start Screen`)
let _1_dir = sprites.create(img`
    ................................................................................
    ................................................................................
    ................................................................................
    ...fff...........................................5..............................
    ...f.fff........................................555.............................
    ...f...f.......................................55.55............................
    ...f...f......................................55...55...........................
    ...f...f.....................................55.....55..........................
    ...f.ff.....................................55.......55.........................
    ...fff...f.ff....fff...fff...fff............5.........5.........................
    ...f.....fffff..ff.ff.f...f.f...f...........5.........5.........................
    ...f.....ff..f..f...f.f.....f...............55555555555.........................
    ...f.....f......fffff..fff...fff............5.........5.........................
    ...f.....f......f........ff....ff...........5.........5.........................
    ...f.....f......ff..f.f...f.f...f...........5.........5.........................
    ...f.....f.......fff...fff...fff............5.........5.........................
    ............................................5.........5.........................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ..............................................................f.................
    ........ff.....................fffff.....f....................f.................
    ........ff....................ff...ff....f....................f.................
    ........ff....................f.....f....f....................f.................
    ........ff....................f..........f....................f.................
    ........ff....................ff.........f....................f.................
    .....ffffffff....ffff..........fffff...fffff....fff....f....fffff...............
    ........ff......f....f.............ff....f.....ff.ff...ffff...f.................
    ........ff.....f......f.............f....f....ff...f...ff.ff..f.................
    ........ff.....f......f.............f....f....f....f...f......f.................
    ........ff.....f......f.............f....f...ff....f...f......f.................
    ........ff.....f......f.............f....f...f.....f...f......f.................
    ........ff......f....f........f...fff....f...ff...fff..f......f.................
    ........ff.......ffff.........ffffff.....f....fffff.f..f......f.................
    .........................................f....................f.................
    ................................................................................
    ................................................................................
    ................................................................................
    `, SpriteKind.dirr)
_1_dir.setPosition(88, 49)
