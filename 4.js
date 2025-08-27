function maxNumber (arr){
    let max = 0;
    for(let i = 0; i<=arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumber([5,1,9,3]));