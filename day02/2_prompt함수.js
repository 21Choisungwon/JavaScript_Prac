console.log('2번 js파일')

// console.log(prompt());

//document.write('안녕');

// console.log(alert(1, 3, 5));

//사용자에게 prompt로 이름을 입력받고, 
//어서오세요 홍길동님 출력하기

let userName = prompt('이름을 입력하세요');

document.write(' <h2>어서오세요 ',userName,' 님 </h2>');
document.write('<p> ',userName,'의 등급은 VIP입니다.</p>')


// 형식을 지정한 문자열 만들기
// '' ,"" ,``
// ``안에 ${} 를 사용하면 해당 부분은 문자열이라고 인식하지 않고 자바스크립트 명령어로 인식
document.write(`<p>${userName}님의 등급은 VIP입니다.</p>`);