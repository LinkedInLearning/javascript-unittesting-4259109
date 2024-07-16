function zutesten() {
    return Math.random();
}

let i = 0;
let fehler = 0;

while (i < 1000) {
    if (zutesten() > 0.9) {
        fehler += 1;
    }
    i += 1;
}


console.log(fehler);