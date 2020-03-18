//1. object literal
// tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Cecep',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'solihin',
//     energy: 20,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

//2. function Declaration

// const methodMahasiswa = {
//         makan : function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     },

//         main : function(kurang){
//         this.energy -= kurang;
//         console.log(`Halo ${this.nama}, jangan banyak main!`);
//     },

//         tidur : function(jam) {
//             this.energy += jam * 2;
//             console.log(`Halo ${this.nama}, selamat tidur!`);
//         }
// };

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// }

// let cecep = Mahasiswa('Cecep', 10);
// let solihin = Mahasiswa('Solihin', 20);

// function Mahasiswa(nama, energy) {

//     this.nama = nama;
//     this.energy = energy;

// }

// let cecep = new Mahasiswa('cecep', 10);

// Mahasiswa.prototype.makan = function(porsi){
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energy -= jam;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, Selamat tidur!`;
// }
//3. Constructor Function
// keyword New
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     this.main = function(kurang){
//         this.energy -= kurang;
//         console.log(`Halo ${this.nama}, jangan banyak main!`);
//     }
// }

// let cecep = new Mahasiswa('Cecep', 10);

// versi Class

// class Mahasiswa {
//     constructor(nama, energy){
//         this.nama = nama;
//         this.energy = energy;
//     }

//     makan(porsi){
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam){
//     this.energy -= jam;
//     return `Halo ${this.nama}, selamat tidur!`;
//     }

//     tidur(jam){
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, Selamat tidur!`;
//     }
// }

// let cecep = new Mahasiswa('Cecep', 10);
// let solihin = new Mahasiswa('Solihin', 20);

let angka = [1, 2, 3];
console.log(angka.reverse());

