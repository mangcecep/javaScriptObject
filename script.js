// const p3 = document.querySelector('.p3');

// function ubahWarna(){
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarna3(){
//     p3.style.backgroundColor = 'red';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');

// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

p3.addEventListener ('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener ('click', function() {
    p3.style.color = 'red';
});




//DOM Manipulation
//buat element
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');

// //simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);

// //simpan pBaru diakhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';



// methode manipulasi Node
// 1. document.createElement()
// 2. document.createTextNode()
// 3. node.appendChild()
// 4. node.insertBefore()
// 5. parentNode.removeChild()
// 6. parentNode.replaceChild()




// //DOM Selection
// // document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Cecep Solihin Yusup';

// //document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');

// for (let i = 0 ; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// //document.getElementByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';