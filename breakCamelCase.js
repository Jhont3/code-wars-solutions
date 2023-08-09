/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""   
*/


function solution(string) {
    let result = '';

    let charArray = string.split('');

    // By using i > 0 as a condition in the if statement, we're ensuring that the space is not added before the first character of the string.
    charArray.forEach((char, i) => {
        if( i > 0 && char !== char.toLowerCase() ) {
            result += ' ' + char;
        } else {
            result += char;
        }
    });

    return result;
}

// Example usage
console.log(solution("camelCasing"));  // Output: "camel Casing"
console.log(solution("identifier"));   // Output: "identifier"
console.log(solution(""));             // Output: ""

/* Another solutions: 
*/

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
}

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

const solution = string => {
    return [...string].map((char) => {
      return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
}
