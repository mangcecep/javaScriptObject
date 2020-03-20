// // Callback
// // Synchronous call Back
// // function halo(nama){
// //     alert(`Halo, ${nama}`);
// // }

// // function tampilkanPesan(callback) {
// //     const nama = prompt('Masukan Nama: ');
// //     callback(nama);
// // }

// // tampilkanPesan(nama => {
// //     alert(`Halo, ${nama}`)
// // });

// const mhs = [
//     {
//         "nama" : "Cecep",
//         "nrp" : "0607472",
//         "email": "cecep.solihin@mola.tv",
//         "jurusan" : "Kimia",
//         "idDosenWali" : 1
//     },
//     {
//         "nama" : "Solihin",
//         "nrp" : "060221",
//         "email": "solihin@mola.tv",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 2
//     },
//     {
//         "nama" : "Yusup",
//         "nrp" : "0607456",
//         "email": "Yusup@mola.tv",
//         "jurusan" : "Teknik Komoputer",
//         "idDosenWali" : 3
//     },
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for( let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Assynchronius Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function (){
//         if (xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response)
//             }else if( xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// },  ()=> {

// });

// console.log('selesai');

//JQUERY
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');