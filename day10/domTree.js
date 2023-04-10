
console.log('연결됨');

let tmp = document.createElement('div');

tmp.textContent = '1';
tmp.classList.add('carousel-item');
tmp.style.backgroundColor = 'red';

for(let i=0;i<5;i++){
}
let contents = document.querySelector('.carousel-contents');
contents.appendChild(tmp);