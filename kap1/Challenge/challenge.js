function lotto1() {
    var zahlen = [];
    for (var i = 0; i < 6; i++) {
      zahlen[i] = 1 + Math.floor(Math.random() * 49);
    }
    return zahlen;
  }