const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    //cek apakah yang diklik adalah thumb
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.foreEach(function(thumb){
            // if(thum.classList.contains('active')){
            //     thumbs.classList.remove('active');
            // }
            thumbs.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});