controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
    info.setLife(3)
    info.setScore(0)
})
info.onLifeZero(function () {
    info.changeLifeBy(-3)
})
scene.setBackgroundImage(assets.image`Rocks`)
