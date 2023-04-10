console.log('2번 js 실행됨');

let idInput = document.querySelector('#input-id');

idInput.oninput = (e)=>{
    console.log(e.target.value);

    const emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    //이메일 정규식
    
    let idP = document.querySelector('#id-msg');

    if(!e.target.value){
        idP.textContent="필수정보입니다";
        idP.style.color="red";
        return;
    }

    if(e.target.value.match(emailPattern)){
        idP.textContent = '멋진 id네요!';
        idP.style.color="green";
        return; // 함수 종료
    }

    idP.textContent='email 형식을 지켜주세요!';
    idP.style.color="red";
    
}

//비밀번호가 잘 입력되었는지 확인
//6~12자리 숫자와 문자가 포함되어야한다
//8~15자리 숫자와 문자, 대문자 특수문자...

//비밀번호 입력 input태그 객체 가져오기

let pwInput = document.querySelector('#input-pw');

pwInput.oninput = (e)=>{
    console.log(typeof(e.target.value));
    //event객체의 target방의 value안에 입력한값이 출력됨
    //e.target.value에 들어있는값은
    // 사용자가 비밀번호 input 창에 입력한값이다

    //최소 8자 이상의 숫자와 문자 조합
    //이 값이 비밀번호 패턴하고 일치하지 않는다면
    //빨간색 경고 메시지 보여주기
    const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    let tmp = document.querySelector('#pw-msg');
    
    if(!e.target.value.match(pwPattern)){   
        tmp.textContent = "올바른 비밀번호 양식을 입력하세요.";
        tmp.style.color = "red";
        return;
    }
        tmp.textContent = "올바른 양식입니다.";
        tmp.style.color = "green";
};




// idInput.oninput = (e)=>{
//     console.log(e.target.value);
    
//     let idP = document.querySelector('#id-msg');

//     if(e.target.value.includes('@') && e.target.value.includes('.')){
//         idP.textContent = '멋진 id네요!';
//         idP.style.color="green";
//         return; // 함수 종료
//     }

//     idP.textContent='email 형식을 지켜주세요!';
//     idP.style.color="red";
    
// }