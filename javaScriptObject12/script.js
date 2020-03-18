// Destructuring

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPekalian(2, 3)[0];
// const kali = penjumlahanPekalian(2, 3)[1];
// const [jumlah , kali] = penjumlahanPekalian(2,3);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);

// Destructur function argument
const mhs1 = {
    nama: 'Cecep',
    umur: 32,
    email: 'cecep.solihin@mola.tv',
    nilai: {
        tugas: 80,
        ut: 85,
        uas: 75
    }
}

// function cetakMhs(mhs){
//     return `Halo, Nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `Halo, Nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah : ${uas}`;
}

console.log(cetakMhs(mhs1));
