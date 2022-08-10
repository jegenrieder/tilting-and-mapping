input.onButtonPressed(Button.A, function () {
    led.toggle(x, y)
})
input.onButtonPressed(Button.B, function () {
	
})
let y = 0
let x = 0
x = 2
y = 2
let HZ = 262
let amplify = 127
music.setVolume(amplify)
led.plot(x, y)
let pausetime = 500
let sensitivity = 200
basic.forever(function () {
    music.ringTone(HZ)
    if (input.acceleration(Dimension.X) > sensitivity) {
        if (x < 4) {
            led.toggle(x, y)
            x = x + 1
            HZ += 40
            led.toggle(x, y)
            music.ringTone(HZ)
            basic.pause(pausetime)
        }
    } else if (input.acceleration(Dimension.X) < 0 - sensitivity) {
        if (x > 0) {
            led.toggle(x, y)
            x = x - 1
            HZ += -40
            led.toggle(x, y)
            music.ringTone(HZ)
            basic.pause(pausetime)
        }
    }
    if (input.acceleration(Dimension.Y) > sensitivity) {
        if (y < 4) {
            led.toggle(x, y)
            y = y + 1
            amplify += 40
            music.setVolume(amplify)
            led.toggle(x, y)
            music.ringTone(HZ)
            basic.pause(pausetime)
        }
    } else if (input.acceleration(Dimension.Y) < 0 - sensitivity) {
        if (y > 0) {
            led.toggle(x, y)
            y = y - 1
            amplify += 40
            music.setVolume(amplify)
            led.toggle(x, y)
            basic.pause(pausetime)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        while (true) {
            basic.pause(1000)
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        music.stopAllSounds()
    }
})
