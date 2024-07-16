function lotto1() {
    var zahlen = [];
    for (var i = 0; i < 6; i++) {
        zahlen[i] = 1 + Math.floor(Math.random() * 49);
    }
    return zahlen;
}
var fehler = 0;
function testLotto1() {
    var ziehen = lotto1();
    // Überprüfung auf doppelte Zahlen
    var uniqueNumbers = new Set(ziehen);
    if (uniqueNumbers.size !== ziehen.length) {
        fehler++;
    }
    // Überprüfung des Wertebereichs
    for (var i = 0; i < ziehen.length; i++) {
        if (ziehen[i] < 1 || ziehen[i] > 49) {
            fehler++;
        }
    }
}
for (var i = 0; i < 100; i++) {
    testLotto1();
}
if (!fehler) {
    console.log("Test bestanden: Keine doppelten Zahlen und alle Zahlen im Bereich von 1 bis 49");
}
else {
    console.log("Test nicht bestanden. Anzahl der Fehler: " + fehler);

}