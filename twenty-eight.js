pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
let off = true
basic.forever(function () {
    if (off) {
        if (game.score() == 4) {
            led.setBrightness(255)
            led.plot(Math.randomRange(1, 3), Math.randomRange(1, 3))
            led.plot(Math.randomRange(1, 3), Math.randomRange(1, 3))
            led.plot(Math.randomRange(1, 3), Math.randomRange(1, 3))
            led.setBrightness(150)
            led.plot(Math.randomRange(1, 3), Math.randomRange(1, 3))
            led.plot(Math.randomRange(1, 3), Math.randomRange(1, 3))
            basic.pause(10)
            control.waitMicros(4)
            basic.clearScreen()
        }
    }
    basic.forever(function () {

        if (off) {
            if (game.score() == 1) {
                led.setBrightness(255)
                led.plot(Math.randomRange(2, 0), Math.randomRange(2, 0))
                led.plot(Math.randomRange(2, 0), Math.randomRange(2, 0))
                led.plot(Math.randomRange(2, 0), Math.randomRange(2, 0))
                led.setBrightness(150)
                led.plot(Math.randomRange(2, 0), Math.randomRange(2, 0))
                led.plot(Math.randomRange(2, 0), Math.randomRange(2, 0))
                basic.pause(10)
                control.waitMicros(4)
                basic.clearScreen()
            }
        }
    })
    basic.forever(function () {

        if (off) {
            if (game.score() == 3) {
                led.setBrightness(255)
                led.plot(Math.randomRange(4, 0), Math.randomRange(4, 0))
                led.plot(Math.randomRange(4, 0), Math.randomRange(4, 0))
                led.plot(Math.randomRange(4, 0), Math.randomRange(4, 0))
                led.setBrightness(150)
                led.plot(Math.randomRange(4, 0), Math.randomRange(4, 0))
                led.plot(Math.randomRange(4, 0), Math.randomRange(4, 0))
                basic.pause(10)
                control.waitMicros(4)
                basic.clearScreen()
            }
        }
    })
})
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            game.setScore(4)
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                game.setScore(1)
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index)
        } else if (index > 2048) {
            game.setScore(3)
            pins.analogWritePin(AnalogPin.P16, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        control.waitMicros(0)
    }
    basic.forever(function () {

        if (off) {
            if (game.score() == 2) {
                led.setBrightness(255)
                led.plot(Math.randomRange(2, 10), Math.randomRange(2, 10))
                led.plot(Math.randomRange(2, 10), Math.randomRange(2, 10))
                led.plot(Math.randomRange(2, 10), Math.randomRange(2, 10))
                led.setBrightness(150)
                led.plot(Math.randomRange(2, 10), Math.randomRange(2, 10))
                led.plot(Math.randomRange(2, 10), Math.randomRange(2, 10))
                basic.pause(10)
                control.waitMicros(4)
                basic.clearScreen()
            }
        }
    })
})
