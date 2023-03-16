console.log('안녕하세요');

// var을 통한선언
var num; //num이라는 변수 선언
num = 10;   //num이라는 변수에 최초로 10이라는 값을 대입
console.log(num);

num = '안녕';   //num에는 10이 들어있었는데 '안녕'값을 재할당
console.log(num);

var num;    //num 이라는 변수는 선언되어있었는데 같은 이름으로 재선언
console.log(num);


//let을 통한 선언
let num1;   //let을 통해 num1 변수 선언
num1 = 100; //num1 변수에 최초 값을 대입(초기화)
console.log(num);


num1 =50;   //재할당 
console.log(num1);

// let num1; 재선언 불가능

//const를 통한 변수 선언
const num2 = 'const 변수';  //const는 선언과 동시에 초기화해야함
console.log(num2);

// num2 = 10; 재할당 불가능
// const num2 = 10; 같은이름으로 재선언 불가능

let num3;
console.log(num3); //변수 선언과 초기화를 하지 않은 상태라면 해당 변수에는 undefined 라는 값이 들어있음

// 변수 선언과 초기화 동시에
let num4 = '안녕';
console.log(num4);
num4 = 100;
console.log(num4);
