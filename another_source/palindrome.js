// Check word that read the same backwards and forwards
// ex. ana, bob

const checkPalindrome = (str) => {
    const str1 = str.split("").reverse().join("");
    return str === str1 ?  true : false;
}

console.log(checkPalindrome("ana")); 
console.log(checkPalindrome("juan")); 
