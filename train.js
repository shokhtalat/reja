// A task
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.


function letterCounter(letter, word){
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if(letter === word[i]){
            count++;
        }
    };
    return count;
}
console.log(letterCounter("e", "engineer"));











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