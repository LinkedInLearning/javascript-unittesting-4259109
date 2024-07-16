function lotto1() {
  var zahlen = [];
  for (var i = 0; i < 6; i++) {
    zahlen[i] = 1 + Math.floor(Math.random() * 49);
  }
  return zahlen;
}
var fehler = 0;
function testLotto1_doppleteZahlen() {
  for (var i = 0; i < 100; i++) {
    var ziehen = lotto1();


    // Überprüfung auf doppelte Zahlen
    var uniqueNumbers = new Set(ziehen);
    if (uniqueNumbers.size !== ziehen.length) {
      fehler++;
    }
  }
  return fehler;
}
function testLotto1_range() {
  for (var i = 0; i < 100; i++) {
    var ziehen = lotto1();

    // Überprüfung des Wertebereichs
    for (var j = 0; j < ziehen.length; j++) {
      if (ziehen[j] < 1 || ziehen[j] > 49) {
        fehler++;
      }
    }
  }
  return fehler;
}

if (!testLotto1_range()) {
  console.log("Test Wertebereich bestanden: Alle Zahlen im Bereich von 1 bis 49");
}
else {
  console.log("Test des Wertebereichs nicht bestanden. Anzahl der Fehler: " + fehler);

}
if (!testLotto1_doppleteZahlen()) {
  console.log("Test Wertebereich bestanden: Alle Zahlen im Bereich von 1 bis 49");
}
else {
  console.log("Test des Wertebereichs nicht bestanden. Anzahl der Fehler: " + fehler);

}