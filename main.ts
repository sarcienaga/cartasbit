input.onButtonPressed(Button.A, function () {
    radio.sendString("Empezar")
})
radio.onReceivedString(function (receivedString) {
    basic.showNumber(randint(1, 9))
    basic.pause(500)
    basic.showString("/")
    basic.showNumber(randint(1, 9))
})
radio.setGroup(1)
