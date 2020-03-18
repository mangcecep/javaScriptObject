// //1. HTML Fragments

// const mhs = {
//     nama: 'Cecep',
//     umur: 33,
//     nim: '0607472',
//     email: 'cecep.solihin@mola.tv'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//         <span class="nim">${mhs.nim}</spam
//     </div>`;

//2. looping
// const mhs = [
//     {
//         nama: 'Cecep',
//         email: 'cecepsolihin@gmail.com'
//     },
//     {
//         nama: 'solihin',
//         email: 'solihin@gmail.com'
//     },
//     {
//         nama: 'Yusup',
//         email: 'yusup@gmail.com'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

//3.conditionals
//ternary

// const lagu = {
//     judul: 'Kau adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. {lagu.feat})` : ''}</li>
//     </ul>
// </div>`


//4. Nested
//HTML fragments bersarang

const mhs = {
    nama: 'Cecep',
    semester:5,
    mataKuliah : [
         'Rekayasa Web',
         'Analisis dan Perancangan Sistem Informasi',
         'Pemrograman Sistem Interaktif',
         'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMatakualiah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : </h4>
    ${cetakMatakualiah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;