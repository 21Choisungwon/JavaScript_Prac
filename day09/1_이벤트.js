console.log('1번 js 실행됨!');

const onButtonHandler = (e)=>{
    // console.log('안녕');
    let tmp = document.querySelector('#box1');
    console.log([tmp]);
    // console.log(tmp.id);
    // tmp.id = 'hello';
    // 특정 요소 속에 들어있는 문자값을
    // 조회하거나 변경하기
    // 1. innerText 속성
    // 2. textContent 속성
    console.log(tmp.textContent);
    tmp.textContent = '안녕';
}

// 질문해야함!

let box2Div = document.querySelector('#box2');

console.log([box2Div]);
const onButton2Handler = function(){

    let tmp = document.querySelector('#box2');
    tmp.innerHTML = '<h2>2</h2>';
}
// const onButton2Handler = (e)=> e.target.innerHTML = '<h2>2</h2>'
box2Div.onclick = (e)=> e.target.innerHTML = '<h2>2</h2>';
console.log([box2Div]);


/// addEventListner 함수

let box3Div = document.querySelector('#box3');
//addEventListenr(이벤트이름문자열, 함수);
//box3의 배경색상 변경


box3Div.addEventListener('click',
(e)=>{
    let tmp = e.target;
    tmp.style.height = "500px";
    tmp.style.backgroundColor = "red";
});

//57분부터 다시시작