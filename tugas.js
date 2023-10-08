// if-else and Nested if
let nilai = 80;

if (nilai >= 88) {
    console.log("Kamu Mendapatkan Nilai A");
} else if (nilai >= 80) {
    console.log("Kamu Mendapatkan Nilai B");
} else {
    if (nilai >= 70) {
        console.log("Kamu Mendapatkan Nilai C");
    } else {
        console.log("Kamu Mendapatkan Nilai D");
    }
}
//  Switch-case
let hari = "Selasa";

switch (hari) {
    case "Selasa":
        console.log("Hari ini adalah Selasa");
        break;
    case "Minggu":
        console.log("Hari ini adalah Minggu");
        break;
    default:
        console.log("Hari ini bukan Senin atau Minggu");
}
//  for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// While 
let angka = 1;

while (angka <= 5) {
    console.log("Angka: " + angka);
    angka++;
}

// Do while
let counter = 1;

do {
    console.log("Perulangan ke-" + counter);
    counter++;
} while (counter <= 5);

// function
function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

console.log("Hasil penjumlahan: " + tambah(5, 3));
console.log("Hasil perkalian: " + kali(2, 4));

