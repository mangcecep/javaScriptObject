//Destructio  Variable / Assignment

//Destructuring Array

const perkenalan = ['halo', 'nama', 'saya', 'cecep'];
// const salam = perkenalan[0];
// const nama = perkenalan[1];
// console.log(nama);
// const [salam, satu, dua, nama] = perkenalan;

//skip items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba(){
//     return [1,2];
// }

// const [a, b] = coba();
// console.log(b);

//Rest parameter
// const [a, ...values] = [1,2, 3, 4, 5];
// console.log(a);
// console.log(values);

//Destructuring Object

// const mhs = {
//     nama: 'cecep',
//     umur: 32
// }

// const {nama, umur} = mhs;
// console.log(nama);

//Assignment tanpa deklarasi Object
    // ({nama, umur} = {nama: 'cecep', umur: 32});
    // console.log(umur);

// Assign ke variable baru

// const mhs = {
//     nama: 'cecep',
//     umur: 32
// }

// const {nama : n, umur: u} = mhs;
// console.log(n);

//Memberikan Default Value
// const mhs = {
//     nama: 'cecep',
//     umur: 32,
//     email: 'cecepsolihin@mola.tv'
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

//,memberikan nilai default dan assign ke variable baru

// const mhs = {
//     nama: 'cecep',
//     umur: 32,
//     email: 'cecep.solihin@mola.tv'
// }

// const {nama : n, umur : u, email : e = 'email@default.com'} = mhs;
// console.log(e);

//rest parameter

// const mhs = {
//     nama: 'cecep',
//     umur: 32,
//     email: 'cecep.solihin@mola.tv'
// }

// const {nama, ...value} = mhs;
// console.log(value);

//Mengambil field pada Object, setelah dikirm sebagai parameter untuk funtion
const mhs = {
    id: 123,
    nama: 'cecep',
    umur: 32,
    email: 'cecep.solihin@mola.tv'
}

function getIdMhs({id}){
    return id;
}

console.log(getIdMhs(mhs));