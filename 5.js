function removeDuplicate (arr){
    let newArr = [];
    let k = 0;
    for (let i = 0; i<= arr.length ; i++){
        let chk = 0;
        for(let j = 0; j <= newArr.length ; j++){
            if( arr [i] === newArr [j]){
                chk = 1;
                break;
            }
        }
        if(chk === 0){
            newArr[k] = arr[i];
            k++;
        }
    }
    return newArr;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));