const angka = [-1, 8, 9, -12, 1, 3, 0, 13, 8, 1];

//filter mencari angka >=3
//menggunakan for

// const newAngka = [];

// for(let i=0 ; i < angka.length ; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

//filter

// const newAngka = angka.filter(a => a >= 3);

// console.log(newAngka);

//map
//kalikan semua angka dengan 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

//reduce

//jumlah selueruh elemen pada array

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(newAngka);

// Method Chaining
//cari angka  > 5
//kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);

    console.log(hasil);