// mengatur waktu akhir perhitungan mundur
let countDownDate = new Date("Apr 21, 2020 08:00:00").getTime();

// memperbaharui hitungan mundur setiap 1 detik
let x = setInterval( function(){
    //untuk mendapatkan tanggal dan waktu hari ini
    let now = new Date().getTime();

    //Temukan jarak antara sekarang dan tanggal hitung mundur
    let distance = countDownDate - now;

    //perhitungan waktu hari, jam, menit dan detik
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60*24)) / (1000 * 60 ));
    let seconds = Math.floor((distance % (1000*60)) / 1000);

    // cetak
    document.getElementById('timer').innerHTML = `${days} Hari : ${hours} Jam : ${minutes} Menit : ${seconds} Detik` ;

    // jika beres
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "EXPIRED";
    }

}, 1000);