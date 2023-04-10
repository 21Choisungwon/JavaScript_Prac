console.log('파일연결');


let max_score = function (scores) {
    let max = 0;
    for (let i = 0; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;
}


// let scores = [1, 2, 4, 5, 2, 12, 15, 11, 18];

let res = max_score([1,4,2,5,6,12,1214]);
console.log(res);