// // Tagged Tempalates
// const nama = 'Cecep';
// const umur = 33 ;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // })
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[1] || ''}`, '');
// }

// const str = coba `Halo , Nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

//Highlight
const nama = 'Cecep';
const umur = 33 ;
const email = 'cecepsolihinyusup@gmail.com'

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight `Halo , Nama saya ${nama}, saya ${umur} tahun. dan email saya adalah : ${email}`;

document.body.innerHTML = str;