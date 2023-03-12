//자바스크립트 문법이 적용되는 공간


//1. 위에서부터 아래로, 좌에서 우로 해석한다
//2. 한 줄의 코드가 끝나면( } 로 끝나는 경우 제외) ; 으로 끝을 알려준다(권장사항)
//3. 한줄에는 한줄의 코드를 쓰자 (권장사항, 가독성을 위해서)
//4. 코드가 길어지거나 복잡해지면 줄바꿈을 활용한다.


//console.log() :함수
console.log('안녕하세요');

//함수가 여러개가 한 줄에 사용되면 가장 안쪽 함수부터 차례대로 해석
console.log(console.log('반가워요'));

//console.log 함수는 인자를 여러개 넘겨줄 수 있다.
//동작은 여러개의 인자 값이 띄어쓰기로 출력된다.
console.log('안녕', 12, true,undefined,null);

//typeof 연산자
console.log(typeof 10);
console.log(typeof '10');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

