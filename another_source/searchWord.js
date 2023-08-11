//Search for a word in a sentence, return how many times the word appears in the sentence.

const searchWordInPhrase = (phr, word) => {
    const normalizedPhrase = phr.toLowerCase().replace(/[!¡,.-]/gi, "");
    let counterWord = 0;

    if(normalizedPhrase.includes(word)){
        const splittedWordsOfArr = normalizedPhrase.split(" ");
        let map = {};

        for (const eachWord of splittedWordsOfArr) {
            if(map[eachWord]){
                map[eachWord]++;
            } else{
                map[eachWord] = 1;
            }
        } 
        // console.log(map);
        counterWord = map[word];

    } else {
        return counterWord = 0;
    }

    return counterWord;

}

console.log(searchWordInPhrase("Hi, this is a Sentence to check for a word in a Sentence, return how many times the word occurs in the sentence.", "sentence"));
console.log(searchWordInPhrase("Hi, this is a Sentence to check for a word in a Sentence, return how many times the word occurs in the sentence.", "Patrick"));