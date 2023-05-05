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
music.play(music.createSong(hex`0078000408020100001c00010a006400f40164000004000000000000000000000000000500000430000400080001290c00100001251400180001221c002000011e24002800011e2c003000012734003800012c38003c000125`), music.PlaybackMode.UntilDone)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
