// for.. of

// const mhs = ['cecep', 'solihin', 'yusup'];

// for (let i = 0 ; i < mhs.length; i++) {
    //     console.log(mhs[i]);
    // }
    
    // mhs.forEach(m => console.log(m));
    
    // for(const m of mhs) {
        //     console.log(m);
        // }

        // String

        // const nama = 'Cecep';
        // for (const n of nama){
            //     console.log(n);
            // }

// const mhs = ['cecep', 'solihin', 'yusup'];
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke ${i + 1}`));

// for (const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

//NodeList

// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for(n of liNama){
//     console.log(n.innerHTML);
// }

// arguments
function jumlahkanAngka(){
    console.log(arguments);
}

jumlahkanAngka(1,2,3,4,5);