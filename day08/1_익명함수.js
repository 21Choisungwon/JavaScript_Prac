console.log('1번 js 파일');



//일반적인 함수 생성 방법
function add(){
    console.log('add함수 실행');
}

//익명함수 정의
(function (){
    console.log('익명함수');
})();


// 전통적인 선언방식을 벗어나 익명함수 방식으로 함수를 정의하는 방법
 let add2 = function(a,b){
    console.log('익명함수로 정의한 add함수 실행됨');
    console.log(a,b);
 }

 add2(10,30);

 console.log('===============================');

 //남이 만들어놓은 함수라고 가정
 function otherFunction(a,b){
     a();
     console.log(b);
 }

 //otherFunction을 사용하려면 첫번째 인자로는 함수를 전달해야한다.
 //(callback함수, 두번째 인자는 any타입의 값)

let my1 = function(){
    console.log('my1 실행');
}

let my2 = function(){
    console.log('my2 실행');
}

otherFunction(my1,10);
otherFunction(my2,50);
console.log('===========================');
//일회성으로만 사용하려면 my1의 매개변수자리에 익명함수 자체를 넣을수있다.

//배열
let ar = [13, 2, 1, 4, 5, 123];
//배열속에 들어있는 요소를 차례로 출력하기

for(let i = 0; i < ar.length; i++){
    console.log(ar[i]);
}

console.log('===========================');

//foreach 함수
// 인자는 1개, 인자의 타입은 함수를 넘겨줘야한다
// 인자로 전달되는 콜백 함수는 매개변수 3개가 필요하다. (안쓸거면 안써도됨)
// 콜백함수의 첫번째 매개변수에는 배열 속 요소가 차례대로 대입됨
// 두번쨰 매개변수에는 해당 요소의 인덱스 번호가 차례대로 대입
// 세번쨰 매개변수에는 해당 배열이 대입된다.
ar.forEach(el=>console.log('e1',el));

