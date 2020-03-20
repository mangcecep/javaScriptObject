// Resy Parameter -> harus di akhir parameter tidak bisa disimpan di depan

// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }
//     // return total;
//     return angka.reduce((a, b) => a + b);
// }


// console.log(jumlahkan(1,2,3,4,5));

// //Array destructuring
// const kelompok1 = ['Cecep', 'Solihin', 'Yusup', 'alfaqih', 'aulia'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

//object destructuring
// const team = {
//     pm : 'Cecep',
//     frontEnd1: 'Solihin',
//     frontEnd2: 'Yusup',
//     backEnd : 'Alfaqih',
//     ux: 'Hana',
//     devOps : 'Aulia'
// }

// const {pm, ...myTeam} =  team;
// console.log(myTeam);

// Filtering

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Cecep', false, 10, true, 'Solihin'))