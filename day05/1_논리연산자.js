console.log('1_논리연산자 js파일');

// 논리연산자는 여러개의 조건을 연결하기 위해 사용
// 그 중에서도 && 는 앞에있는 조건도 true, 뒤에있는 조건도 true인
// 경우에만 결과가 true로 나오고, 나머지는 fasle로 나온다

console.log('&& 연산');
console.log(true && true); //ture
console.log(true && false); //false
console.log(false && false); //false
console.log(false && true); //false
console.log('================================');

//or 연산은 앞에있는 조건 혹은 뒤에있는 조건 둘 중 하나라도 만족한다는 조건을
//만들고 싶을 때는 ||로 연결한다.
console.log('|| 연산');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log('================================');


//부정 연산자
console.log('! 연산');
console.log(!true);
console.log(!false);


//맥락평가
//맥락에 따라서 더 이상 연산할 필요가 없다면 즉시 종료시켜
//비용을 아끼는 방법

//논리연산자의 피연산자 자리에 Boolean 타입이 아닌
//다른 타입의 값이 왔다면 truthy 한 값인지 falsy 한 값인지로
//판단을 한다

//falsy(거짓같은 값, Boolean으로 바꿨을 때 false로 바뀌는 값)
//0 , null , undefined , NaN, ""

//truthy 는 falsy의 여집합 모두
//0 && '안녕하세요'  --> 0
//{title : '대모험', page : 500} && {10, 20, 30} -->{10, 20, 30}
// undefined || {title: '대모험' , page: 500} --> {title: '대모험' , page: 500}

//javascript를 통해 css를 수정할 때
//조건에 따라 수정시킬 수 있다
//ex) 나이트모드가 true && 적용시킬 {backgroundcolor : 'black', color: 'white'}

// if(나이트모드){
//     return {backgroundColor:'black', color:'white'};
// }

// ! 연산자
// !truthy --> false
// !falsy -->true
console.log(!'안녕하세요');
console.log(!0);

//!! --> 부저으이 부정이니 단순히 Boolean 형변환 함수를 쓰지않고
// Boolean 타입으로 형변환하기 위해서 사용한다.
//!!0 --> false
console.log(Boolean(0));
console.log(!!0);

// ?? 연산자
// || 과 비슷학 동작한다
// a ?? b
// a가 undefined거나 null 이라면 결과는 b 아니면 a
// a || b
//  a 가 falsy한 값이면 결과는 b 아니면 a

// 값이 할당되지 않은 경우에만 뒤에있는 값이 결과로 나온다.
console.log( null ?? '안녕');
console.log(undefined ?? '안녕');
console.log(0 ?? '안녕');
