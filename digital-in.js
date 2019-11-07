
pins.analogWritePin(AnalogPin.P2, 1023)


basic.forever(function () {


    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P2, 1023)


    }
    else {
        pins.analogWritePin(AnalogPin.P2, 0)
    }
})
