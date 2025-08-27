function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let capitalizedWord = word[0].toUpperCase() + word.slice(1);
            capitalizedWords.push(capitalizedWord);
        } else {
            capitalizedWords.push(word); 
        }
    }

    return capitalizedWords.join(' ');
}

console.log(capitalizeWords("hello world"));
