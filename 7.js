function findEven(arr){
    let newArr = [];
    for (let i = 0, j=0; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

console.log(findEven([1, 2, 3, 4, 5, 6]));