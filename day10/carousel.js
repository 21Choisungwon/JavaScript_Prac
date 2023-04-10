console.log('js파일 연결')

// let cnt = 0;
// const onCarouselButtonClick = function (dir) {
//     console.log("출력");
//     let contentsDiv = document.querySelector('.carousel-contents');
//     //버튼을 클릭할때마다 contentsDiv 의 Css에서 translateX(-200px)식 바꿔주기
//     if ((dir === 'right') && (cnt !== contentsDiv.childElementCount-1)) {
//         cnt++;
//     } else if ((dir === 'left') && (cnt !== 0)) {
//         cnt--;
//     }
//     contentsDiv.style.transform = `translateX(${-200*cnt}px)`; //
// }

let cnt = 0;
const onCarouselButtonClick = function (dir) {
    console.log("출력");
    let contentsDiv = document.querySelector('.carousel-contents');
    let tmp = document.querySelectorAll('.carousel-item');

    //버튼을 클릭할때마다 contentsDiv 의 Css에서 translateX(-200px)식 바꿔주기
    if ((dir === 'right') && (cnt !== tmp.length-1)) {
        cnt++;
    } else if ((dir === 'left') && (cnt !== 0)) {
        cnt--;
    }
    contentsDiv.style.transform = `translateX(${-200*cnt}px)`; //
}