function factorial (num) {
    let ans = 1;
    for (let i = 1 ; i <= 5 ; i++){
        ans *= i;
    }
    return ans;
}

console.log(factorial(5))