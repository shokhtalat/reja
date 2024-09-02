// F-TASK: 

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi

function findDoublers(str) {
    const letterCounts = {};

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        
        if (letterCounts[letter]) {
            letterCounts[letter]++;
        } else {
            letterCounts[letter] = 1;
        }
        
        if (letterCounts[letter] >= 2) {
            return true;
        }
    }

    return false;
}
console.log(findDoublers("hello")); // true
console.log(findDoublers("world")); // false
// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function getReverse(word){
//     return word.split('').reverse().join('');
// }
// console.log(getReverse('hello'));

// D-TASK: 

// Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
// const moment = require("moment");
// const time = moment().format("HH:mm");
// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }
//     qoldiq() {
//         console.log(`hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola bor.`);
//     }
//     sotish(item, pcs){
//         if(this[item] >= pcs) {
//             this[item] -= pcs;
//             console.log(`hozir ${time}da ${pcs}ta ${item} sotildi`);
//         } else {
//             console.log(`Yetarli ${item} mavjud emas`);
//         }
//     }
    
//     qabul(item, pcs){
        
//             this[item] += pcs;
//             console.log(`hozir ${time}da ${pcs}ta ${item} qabul qilindi`);
       
//     }


// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish('non', 2);
// shop.qabul('cola', 15);
// shop.qoldiq();


// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;



// function checkContent(word1, word2){
//     if(word1.length != word2.length) return false;
    
//     let sortedWord1 = word1.split('').sort().join('');
//     let sortedWord2 = word2.split('').sort().join('');

//     return sortedWord1 === sortedWord2;
// };

// console.log(checkContent("mitgroup", "gmtiprou"));

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// function numberCounter(word){
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if(!isNaN(word[i])){
//             count++;
//         }
//     };
//     return count;
// }
// console.log(numberCounter("ad2a54y79wet0sfgb9"));



// A task
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.


// function letterCounter(letter, word){
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if(letter === word[i]){
//             count++;
//         }
//     };
//     return count;
// }
// console.log(letterCounter("e", "engineer"));











// console.log("Jack Ma maslahatlari");

// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "O'zingizga ishlashingizni boshlang", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Endi dam oling, foydasi yo'q endi", // 60~
// ];
// // CALL BACK functions
// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a> 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000);
        
//     }
// }
// console.log('passed here: 0');
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a> 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject)=>{
//             // setTimeout(() =>{
//             setInterval(() =>{
//                 resolve(list[5]);
//             }, 1000);
//         });
//        // return list[5];

//         // setTimeout(function() {
//         //     callback(null, list[5]);
//         // }, 5000);
        
//     }
// }
 
//  console.log('passed here: 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// }); 

// then/catch


// // async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     // javob = await maslahatBering(71);
//     // console.log("javob:", javob);
//     // javob = await maslahatBering(41);
//     // console.log("javob:", javob);
    
// }
// run();