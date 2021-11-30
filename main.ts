radio.onReceivedString(function (receivedString) {
    if (receivedString == "Stop") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
    if (receivedString == "Recule") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedString == "Droite") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 121)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
    if (receivedString == "Gauche") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 121)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    }
    if (receivedString == "Avance") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
})
radio.setGroup(69)
basic.forever(function () {
	
})
