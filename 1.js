function reverseString (str){
    let len = str.length;
    let revstr = '';
    for (let i=len-1 ; i >= 0 ; i--){
        revstr += str[i];
    }
    return revstr;
}

console.log(reverseString('hello'));