/* Title Case
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

    function titleCase(title, minorWords) {
        if (title === "") {
            return "";
        }

        //  This checks if the minorWords parameter is falsy, which includes cases where it's:  null, undefined, false, 0, "", NaN.
        if (!minorWords) {
            minorWords = "";
        }

        minorWords = minorWords.toLowerCase().split(" ");
        let titleWords = title.toLowerCase().split(" ");
        
        titleWords[0] = titleWords[0][0].toUpperCase() + titleWords[0].slice(1);
        for (let i = 1; i < titleWords.length; i++) {
            if (!minorWords.includes(titleWords[i])) {
                titleWords[i] = titleWords[i][0].toUpperCase() + titleWords[i].slice(1);
            }
        }
        return titleWords.join(" ");
    } 

    console.log(titleCase('a clash of KINGS', 'a an the of'));

  // Another solutions:

    function titleCase(title, minorWords) {
        var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
        return title.toLowerCase().split(' ').map(function(v, i) {
        if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
            v = v.split('');
            v[0] = v[0].toUpperCase();
            v = v.join('');
        }
        return v;
        }).join(' ');
    }


    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }

    function titleCase(title, minorWords) {  
        var titleAr = title.toLowerCase().split(' '),
            minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
            
        return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                        .join(' ');
    }

    /*  Trutty examples: 
    Boolean(12) // true
    Boolean("hello") // true
    Boolean(true) // true
    Boolean([1, 2, 3]) // true
    Boolean(function hello() {}) // true
    Boolean({ a: 1, b: 2 }) // true

    In JavaScrip all not falsy in  is truthy like empties arrays and objects

    Boolean([]) // true
    Boolean({}) // true */