console.log('3번 js 파일');

//구조 분해 할당
//배열 요소의 갯수보다 변수의 갯수가 적어도 가능(순서대로)
//배열 요소의 갯수보다 변수의 갯수가 많아도 가능(undefined)
let ar = [10,20,39];
let [a,b,c] = ar;

console.log(a);
console.log(b);
console.log(b);

//객체 구조 분해 할당
//변수이름은 반드시 객체 속 key와 동일하게 선언
//순서는 상관 없으며 없는 key를 변수이름으로 사용하면 undefined

let book = {title:'책제목', price : 10000};
const {title,price,page} = book;
console.log(price);
console.log(title);
console.log(page);      //undefined



let num1 = 10;
let num2 = num1;

let ar1 = [10,20,30];
let ar2 = ar1;
ar2[0] = 100;
console.log(ar[1]);

//
// ar3에 들어있는 요소들을 그대로 갖고 있는 ar4 배열을 만들고
// ar4 배열의 0번쨰 방을 100으로 바꿨을 때
// ar3는 여전히 [10,20,30] 이면 성공
let ar3 = [10,20,30];
let ar4 = [ar[0],ar[1],ar[2],ar[3]];
ar4[0] = 100;
console.log(ar3);
console.log(ar4);