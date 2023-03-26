/* The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, 
letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters 
are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are
used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the 
international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated 
as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
C#: MorseCode.Get(".--") (returns string)
F#: MorseCode.get ".--" (returns string)
Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no 
    longer used and kept only for old solutions.
Elm: MorseCodes.get : Dict String String
Haskell: morseCodes ! ".--" (Codes are in a Map String String)
Java: MorseCode.get(".--")
Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
Racket: morse-code (a hash table)
Rust: MORSE_CODE
Scala: morseCodes(".--")
Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols
    All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail 
    if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply
    ignore the tests, resulting in a "valid" solution.
*/

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
  "": " ", // espacio
};

decodeMorse = function (morseCode) {
  function deco1(x) {
    return MORSE_CODE[x];
  }

  // Define la función auxiliar deco2, que toma una cadena que representa una palabra en código Morse y
  // la convierte en una palabra en texto
  function deco2(x) {
    return x
      .split(" ") // Divide la cadena por los espacios para obtener un array de secuencias de puntos y guiones
      .map((x) => deco1(x)) // Convierte cada secuencia de puntos y guiones en su letra correspondiente
      .join(""); // Une todas las letras para formar la palabra
  }

  return morseCode
    .trim() // Elimina los espacios en blanco al principio y al final de la cadena
    .split("   ") // Divide la cadena por la secuencia "   " para obtener un array de palabras en código Morse
    .map((x) => deco2(x)) // Convierte cada palabra en su equivalente en texto
    .join(" "); // Une todas las palabras en una sola cadena, separadas por un espacio en blanco
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
