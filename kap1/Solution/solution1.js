function lotto1() {
  var zahlen = [];
  for (var i = 0; i < 6; i++) {
    zahlen[i] = 1 + Math.floor(Math.random() * 49);
  }
  return zahlen;
}

function testLotto1() {
  var ziehen = lotto1();


  // Überprüfung auf doppelte Zahlen
  var uniqueNumbers = new Set(ziehen);
  if (uniqueNumbers.size !== ziehen.length) {
    console.error("Fehler: Es gibt doppelte Zahlen in der Ziehung");
    return false;
  }

  // Überprüfung des Wertebereichs
  for (var i = 0; i < ziehen.length; i++) {
    if (ziehen[i] < 1 || ziehen[i] > 49) {
      console.error("Fehler: Eine Zahl liegt außerhalb des Bereichs von 1 bis 49");
      return false;
    }
  }

  console.log("Test bestanden: Keine doppelten Zahlen und alle Zahlen im Bereich von 1 bis 49");
  return true;
}
testLotto1();