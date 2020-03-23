// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=4910353b&s=avengers',
//     success: movies => console.log(movies)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=4910353b&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=4910353b&s=avengers').then(response => response.json()).then(response => console.log(response));

// Promise
// Object yang merepresentasikan kegagalan atau keberhasilan event yang asynchronous di masa yg akan datang
// janji (terpenuhi / ingkar)
// state (fullfilled / rejected / pending)
// callback (resolve / reject / finally-> waktu tunggu selesai)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
//  const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah dipenuhi!');
//     } else {
//         reject('ingkar janji..');
//     }
//  });

//  janji1
//     .then(response => console.log('OK : ' + response ))
//     .catch(response => console.log('NOT OK! : ' + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if( ditepati ){
//         setTimeout(() => {
//             resolve('Ditepati beberapa waktu!');
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             resolve('tidak Ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(()=> console.log('selesai menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log( 'NOT OK! : ' + response));
// console.log('selesai');

// Promise.all()

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'Avengers',
            sutradara : 'Cecep',
            pemeran: 'Solihin, Yusup'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Bandung',
            temp : 26,
            kondisi: 'Cetah berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
Promise.all([film, cuaca])
//  .then(response => console.log(response));
.then(response => {
    const [fil, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});