console.log('dom.js');

console.log([document]);
console.log(document.getElementById('box1'));
// document.getElementById('box1').textContent='안녕';

// 함수 사용 결과는 무조건 배열(HTMLCollection 타입)
let res = document.getElementsByClassName('container');

console.log(res);

res = document.querySelector('#box1');
//querySelector로 가져올때 이름이 겹치면 첫번째것만 가져옴
console.log(res);


res = document.querySelectorAll('div');
//div태그를 모두 가져오기때문에 결과가 배열이다.
//선택자로 받아오는데 결과가 배열 (NodeList 타입)에 담긴다.