// 2.1 Execution context, hoisting & scope

// console.log(nama);
// var nama = 'cecep';

//creation phase pada global context
//jika nama variabel belum di deklarasikan sudah ingin dicetak ke console maka js akan membuat variable berna 'undefined'
//name var = undefined
// nama function = f()
//ini dinamakan hoisting
//js mendefinisakan -> window = global object
//this = window

//execution phase-> mengeksekusi program dari atas ke bawah


// var nama = 'Cecep';
// var umur = 33;

// console.log(sayHello());

// function sayHello(){
//     return(`halo, nama saya ${nama}, saya ${umur} tahun.`);
// }

//function membuat local Execution Context
//yang di dalamnya terdapat creation dan execution phase
//window
//argumen
//hoisting

// var nama ='cecep';
// var username = '@mangcecep';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/mangcecep';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         console.log('ini c'){

//         }

//         c();
//     }

//     b();

// }

// a();