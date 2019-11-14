let valOne = 0
let valTwo = 0
let valThree = 0
let valFour = 0
let valFive = 0
let valSix = 0
let avgNum = 0
let lowAvg = 0
let highAvg = 0
for (let i = 0; i < 1; i++) {







    function readMap(reading: number) {
        return pins.map(reading, lowAvg, highAvg, 0, 5)
    }

    for (let i = 0; i < 1; i++) {
        basic.showArrow(4)
        basic.pause(400)
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        valOne = pins.analogReadPin(AnalogPin.P2)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)

    }

}
for (let i = 0; i < 1; i++) {
    basic.showArrow(4)
    basic.pause(400)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    valTwo = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)

}


for (let i = 0; i < 1; i++) {
    basic.showArrow(4)
    basic.pause(400)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    valThree = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)

}
for (let i = 0; i < 1; i++) {
    basic.showArrow(0)
    basic.pause(400)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    valFour = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)

}
for (let i = 0; i < 1; i++) {
    basic.showArrow(0)
    basic.pause(400)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    valFive = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)

}
for (let i = 0; i < 1; i++) {
    basic.showArrow(0)
    basic.pause(400)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    valSix = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)

}

lowAvg = (valOne + valTwo + valThree) / 3

for (let i = 0; i < 1; i++) {
    basic.showArrow(0)
    basic.pause(400)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    valOne = pins.analogReadPin(AnalogPin.P2)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)

}
highAvg = (valFour + valFive + valSix) / 3
avgNum = (lowAvg + highAvg) / 2

basic.showString("Calibration Complete")

if (lowAvg == 0) {


    basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)
}
if (lowAvg <= 330) {
    basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
# # # # #
`)
}
if (lowAvg <= 660) {
    basic.showLeds(`
. . . . .
. . . . .
. . . . .
# # # # #
# # # # #
`)
}
if (lowAvg <= 920) {
    basic.showLeds(`
. . . . .
. . . . .
# # # # #
# # # # #
# # # # #
`)
}
else {
    basic.showLeds(`
. . . . .
# # # # #
# # # # #
# # # # #
# # # # #
`)
}
basic.clearScreen()
basic.pause(400)
if (highAvg == 0) {


    basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)
}
if (highAvg <= 330) {
    basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
# # # # #
`)
}
if (highAvg <= 660) {
    basic.showLeds(`
. . . . .
. . . . .
. . . . .
# # # # #
# # # # #
`)
}
if (highAvg <= 730) {
    basic.showLeds(`
. . . . .
. . . . .
# # # # #
# # # # #
# # # # #
`)
}
if (highAvg <= 920) {
    basic.showLeds(`
. . . . .
. . . . .
# # # # #
# # # # #
# # # # #
`)
}
else {
    basic.showLeds(`
. . . . .
# # # # #
# # # # #
# # # # #
# # # # #
`)
}
