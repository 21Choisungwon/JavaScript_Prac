console.log("2번 js 파일");


let num = 10;

switch (num) {
    case 100:
        console.log("영역1");
        break; //switch문을 종료시키고 싶을 경우

    case 50:
        console.log('영역2');
        break;

    case 10:
        console.log('영역 3');
        break;

    default:
        console.log("잘못입력");
        break;
}

console.log("switch문 바깥쪽");


//월 입력 받아서 일 출력하기 switch문

let month = 1;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:                            //switch문 성질이용break가 없으면 중지하지않음
        console.log("31일이 마지막일");
        break;
    case 2:
        console.log('28 일이 마지막일');
        break;
    default:
        console.log('30일이 마지막일');
}