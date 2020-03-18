// function expression
// const tampilNama = function (nama){
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Cecep'));

// const tampilNama = (nama) => { return `Halo, ${nama}`;
// }

// console.log(tampilNama('cecep'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Cecep', 'malam'));


//implisit return
// const tampilNama = nama =>  `Halo, ${nama}`;
// console.log(tampilNama('cecep'));

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ['cecep', 'solihin', 'yusup'];

// let jumlahHuruf = mahasiswa.map( function (nama){
//     return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

//konsep this pada arrow function
//constructor function
// const Mahasiswa = function() {
//     this.nama = 'Cecep';
//     this.umur = 32;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const cecep = new Mahasiswa();

// const Mahasiswa = function() {
//     this.nama = 'Cecep';
//     this.umur = 32;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const cecep = new Mahasiswa();

//Object litereal

// const mhs1 = {
//     nama: 'Cecep',
//     umur: 32,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const Mahasiswa = function() {
//         this.nama = 'Cecep';
//         this.umur = 32;
//         this.sayHello = function(){
//             console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         }

//         setInterval(() => {
//             console.log(this.umur++);
//         }, 500);
//     }

//     const cecep = new Mahasiswa();



const box = document.querySelector('.box');

box.addEventListener('click', function(){
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
        console.log(this);
    }, 600);
});