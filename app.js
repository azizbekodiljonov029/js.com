// --- 01. Mahsulotning umumiy narxi ---
let daftarNarxi = 5000;
let ruchkaNarxi = 3000;
let daftarSoni = 4;
let ruchkaSoni = 2;

let daftarJami = daftarNarxi * daftarSoni;
let ruchkaJami = ruchkaNarxi * ruchkaSoni;
let jamiSumma = daftarJami + ruchkaJami;

console.log("01. Jami summa: " + jamiSumma + " so'm");


// --- 02. Yoshni tekshirish ---
let yosh = 17;

if (yosh >= 18) {
    console.log("02. Kirish mumkin");
} else {
    console.log("02. Kirish mumkin emas");
}


// --- 03. Boolean() natijasini aniqlash ---
console.log("03. Boolean(0):", Boolean(0));
console.log("03. Boolean('JavaScript'):", Boolean("JavaScript"));
console.log("03. Boolean(25):", Boolean(25));
console.log("03. Boolean(null):", Boolean(null));
console.log("03. Boolean(undefined):", Boolean(undefined));


// --- 04. Imtihondan o'tish ---
let ball = 76;
let davomat = 85;

if (ball >= 60 && davomat >= 80) {
    console.log("04. Imtihondan o'tdi");
} else {
    console.log("04. Imtihondan o'tmadi");
}


// --- 05. Bepul yetkazib berish ---
let buyurtmaSummasi = 120000;
let premiumObuna = false;

if (buyurtmaSummasi >= 100000 || premiumObuna === true) {
    console.log("05. Bepul yetkazib berish");
} else {
    console.log("05. Yetkazib berish pullik");
}


// --- 06. Login va parol tekshiruvi ---
let login = "student";
let password = "js12345";

if (login === "student" && password === "js12345") {
    console.log("06. Tizimga xush kelibsiz");
} else {
    console.log("06. Login yoki parol xato");
}


// --- 07. Chegirmali xarid ---
let mahsulotNarxi = 200000;
let kuponBor = true;

if (kuponBor === true) {
    let chegirma = mahsulotNarxi * 0.15;
    let yakuniySumma = mahsulotNarxi - chegirma;
    console.log("07. Chegirmali yakuniy summa: " + yakuniySumma + " so'm");
} else {
    console.log("07. Chegirmasiz narx: " + mahsulotNarxi + " so'm");
}


// --- 08. Bo'sh qiymatni tekshirish ---
let username = "";
let age = 20;

if (username === "") {
    console.log("08. Ismingizni kiriting");
} else {
    console.log("08. Xush kelibsiz");
}
console.log("08. Age qiymati mavjudligi (Boolean): " + Boolean(age));


// --- 09. Sonning juft yoki toqligini aniqlash ---
let number = 14;

if (number % 2 === 0) {
    console.log("09. Juft son");
} else {
    console.log("09. Toq son");
}


// --- 10. Kino tomosha qilish shartlari ---
let yoshKino = 16;
let otaOnaRuxsati = false;
let chiptaBor = true;

if ((yoshKino >= 18 || otaOnaRuxsati === true) && chiptaBor === true) {
    console.log("10. Kino zaliga kirish mumkin");
} else {
    console.log("10. Kirish mumkin emas");
}