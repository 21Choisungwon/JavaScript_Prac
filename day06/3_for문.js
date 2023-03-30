console.log('3번 js 파일');


//초기식; 조건식; 증감식
for(let i = 0; i< 3;i ++){
    console.log("홍길동");
}

console.log('for문 종료');


let ar = ['최성원', '홍길동','김철수','김영희'];

for(let i = 0 ; i<ar.length; i++){
    console.log(ar[i]);

    if(ar[i] === '홍길동'){
        console.log(i,'번째 홍길동 찾앗다!');
        break;
    }
}