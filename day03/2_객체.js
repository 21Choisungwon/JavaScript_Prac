console.log('2번 js 파일');

let book = {
    title : '홍길동전',
    page : 59,
    price: 40,
    isSoldOut: false,
};

console.log(book);
console.log(typeof book);
console.log(book['title']);
console.log(book['page']);
console.log(book['title']);
console.log(book['title']);
console.log(book.title);

let scores = {0:50, 1:70, 2:49};

console.log(scores);
console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);
console.log(scores[3]);

book = {
    title : '홍길동전',
    page : 59,
    price: 40,
    isSoldOut: false,
};

console.log(book);
console.log(book.title);
console.log(book.page);

// 하위연산자를 통해 가져올 겨우 발생할 수 있는 문제
let key = 'title';

console.log(book.key);  //undefined
console.log(book[key]); //홍길동전

let student = {name:'홍길동',age : '15', 'phone_number':'00000'};

console.log(student.name);
console.log(student['name']);

console.log(student.age);
console.log(student['age']);

console.log(student['phone_number']);

student.name = '최성원';
student['age'] = 50;

console.log(student.name);