// spread operator
//memecah iterable menjadi single element

// const mhs = ['cecep', 'Solihin', 'yusup'];

// console.log(...mhs[0]);

//menggabungkan dua Array
// const mhs = ['cecep', 'Solihin', 'yusup'];
// const dosen = ['Hana', 'Frista', 'Rusliana'];

// // const orang = [...mhs, ...dosen];
// const orang = [...mhs,'aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// //mengcopy array
// const mhs = ['cecep', 'Solihin', 'yusup'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];

// for(let i=0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
// console.log(huruf);