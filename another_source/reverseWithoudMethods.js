// Reverse a string without using programming language methods

const reverseWord = (str) => {
    let invertedWord = "";

    for (const character of str) {
        invertedWord = character + invertedWord;
    }
    return invertedWord;
} 

console.log(reverseWord("hello world"));

// const reverseWord = (str) => str.split("").reverse().join("");
