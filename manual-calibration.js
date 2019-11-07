function mapSoil () {
	
}
function soilLevel() {

    pins.digitalWritePin(DigitalPin.P5, 1)
    let soilLevel = pins.analogReadPin(AnalogPin.P2)

    pins.digitalWritePin(DigitalPin.P5, 0)

    return soilLevel

}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 253) {
        game.setScore(0)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) <= 506) {
        game.setScore(1)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 1003) {
        game.setScore(3)
    }
})
basic.forever(function () {
    if (game.score() == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 759) {
        game.setScore(2)
    }
})
basic.forever(function () {
    if (game.score() == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) <= 1023) {
        game.setScore(4)
    }
})
basic.forever(function () {
    if (game.score() == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (game.score() == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (game.score() == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
