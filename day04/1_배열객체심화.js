
console.log('첫번쨰 js 파일');

let ar1 = [10, 20, 30];
let ar2 = [ar1[0],ar1[1],ar1[2]];

ar2[0] = 100;
// let ar2 = ar1;
// ar2[0] = 100;

console.log('ar1:',ar1);
console.log('ar2:',ar2);


//spread operator, 전개 연산자
//...
// 1. 피연산자 타입과 갯수
// 객체 (Array 표현), 갯수는 1개
// 2. 연산의 동작
// 해당 객체 혹은 배열 속에 있는 요소를 전개한다(풀어버린다)
// 3. 연산 결과 값의 타입




let names = ['최성원', '홍길동', '김철수'];

//...names -->'최성원', '홍길동', '김철수' 로 풀어준다
console.log(...names);

let cpy = [names[0], names[1],names[2]];
let cpy1 = [...names];
cpy1[0] = '수정';

console.log(cpy);
console.log(cpy1);


// 객체의 복사

let book = {title:'대모험', page:50};

// let book_cpy = book;

// let book_cpy = {title: book.title, page: book.page};

//...book --> title: '대모험', page: 50 
let book_cpy = {...book};
book_cpy.title = '홍길동의 대모험';

console.log(book);
console.log(book_cpy);

// 전개 연산자로 완벽하게 깊은 복사가 가능할까?
// 객체 안에 객체가 있는 경우..

let student = {
    name: '홍길동',
    age: 10,
    hobby: ['축구','야구'],
    friend: {name:'김철수', age :10 },
};

let student_cpy = {...student, hobby: [...student.hobby], friend:{...student.friend}};


student_cpy.age = 15;
student_cpy.hobby[0] = '농구';
student_cpy.friend.name = '박철수';


console.log(student);
console.log(student_cpy);


let myObj = {
    name: '홍길동',
    age: 10,
    name: '김철수',
};


console.log(myObj);
// myObj 의 key :   name   age
// myObj 의 value:  김철수 10


// 참조타입의 차원이 늘어날수록 깊은 복사를 하는 것이 어려워진다
// 이럴때는 객체를 통채로 문자열로 변경하고, 해당 문자열을 다시 객체로 변경하면
// 원본과 똑같은 새로운 객체를 만들 수 있다.


//객체를 문자열로 바꿔주는 함수
//JSON.stringfy
//1.인자의 갯수와 타입
//  1개 객체
//2.함수의 동작
//  인자로 전달받은 객체를 문자열로 바꿔준다
//3.함수 사용 결과 값의 타입
//  String 타입의 값


//JSON.parse
//1. 인자는 1개, 문자열
//2. 인자로 받아온 문자열을 객체로 만들어 준다.
//3. 문자열을 기반으로 만들어진 새로운 객체

let student_cpy2 = JSON.parse(JSON.stringify(student));

student_cpy2.hobby[0] = '발야구';
student_cpy2.age = 25;
student_cpy2.friend.age = 200;

console.log(student);
console.log(student_cpy2);



//배열 
let scores = [10,[1,2,3],{name: '홍길동', age: '20',}]
let scores_cpy = JSON.parse(JSON.stringify(scores));

scores_cpy[0] = 1000;
scores_cpy[1][0] = 1000;
scores_cpy[2].name = '박영희';

console.log(scores);
console.log(scores_cpy);

//React, React 기반으로 만들어진 framework(next.js)에서
//상태관리를 할 때 원본 데이터는 수정되면 안된다는 원칙을 지켜야한다 (state불변성)

