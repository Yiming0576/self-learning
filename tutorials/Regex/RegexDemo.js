// regex  using test method

let sentence = "The dog chase the cat.";
let regex11 = /the/;

let myString = "Hello, World!";
let myRegex1 = /Hello/;
let resultOne1 = myRegex.test(myString);
console.log({ result: resultOne1 });

let waldoIsHiding = "Somewhere Waldo is hiding in this text"
let waldoRegex = /Waldo/
let resultTwo2 = waldoRegex.test(waldoIsHiding);
console.log({result: resultTwo2});


// With | to add more cases to test
/**
 * n JavaScript regular expressions, the pipe symbol (|) acts as the OR operator,
 *  allowing you to match one pattern or another. 
 */
let petString = "James has a pet cat."
let petRegex = /dog|cat|bird|fish|/
let resultThree = petRegex.test(petString)
console.log({result: resultThree});

// case insensitive 
/**
 * i (case-insensitive): 
 * This flag makes the regex case-insensitive, 
 * meaning it will match letters regardless of whether 
 * they are uppercase or lowercase.
 */
let codeString = "freeCodeCamp"
let fccRegex = /freecodecamp/i
let resultFour = fccRegex.test(codeString)
console.log({result: resultFour});

// using the extractStr.match
let extractStr = "Extract the word 'coding' from this string"
let codingRegex = /coding/
let resultOne = extractStr.match(codingRegex)
console.log({result: resultOne});


//  use g to get all of the "String"
/**
 * g (global): This flag makes the regex search for all matches in the string,
 *  not just the first one. Without the g flag, the regex will stop after finding the first match.
 */
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
let results = testStr.match(ourRegex)

console.log({results: results});


//  using i and g to get all of the String with case insensetive 
let twinkleStart = "Twinkle, twinkle, little star"
let starRegex = /twinkle/ig
let resultTwo = twinkleStart.match(starRegex)

console.log({result: resultTwo});

// using . represents any character 
/**
 * In regular expressions (regex) in JavaScript, 
 * the dot (.) is a special character that matches any single character except for
 *  newline characters (\n, \r).
 */
let humStr = "I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
let result1 = humStr.match(huRegex)
let result2 = hugStr.match(huRegex)

let exampleStr = "let's have fun with regular expressions"
let unRegex = /.un/
let result3 = unRegex.test(exampleStr)

console.log({result: result3});



/**
 * In JavaScript regular expressions, 
 * square brackets ([]) define a character set or character class,
 * allowing you to match any one character from a specified range or set of characters.
 */

// vowel or consotant
let bgRegex = /b[aiu]g/
let quoteSample = "Beware of bugs in the above code; I have only provde it correct"
let vowelRegex = /[aeiou]/ig
let alphabetRegex = /[a-z]/ig
let resultSix = quoteSample.match(alphabetRegex)
let resultFive = quoteSample.match(vowelRegex)

console.log({resultFive: resultFive});
console.log({resultSix: resultSix});


// number and letters
let sample = "123124543rgwrsbavsSDASDASDASDASDretrkngbdfvdsaewret@!@#^&%*^^&$%^#@@"
let numberAndLettersRegex = /[0-9a-zA-Z]/ig
let res = sample.match(numberAndLettersRegex);

console.log({result: res});


//  ^ 
/**
 * When ^ is used inside square brackets, it negates the character set, 
 * meaning it will match any character except the ones specified.
 */

let quotes = "3 blind mice"
let myRegex = /[^0-9aeiou]/ig
let result = quotes.match(myRegex)
console.log({result: result});

/**
 * When ^ is used outside of square brackets, 
 * it matches the beginning of a string. 
 * It ensures that the pattern only matches 
 * if it's at the start of the string.
 */

let regex = /^hello/;
console.log("hello world".match(regex));  // Matches "hello"
console.log("world hello".match(regex));  // No match, as "hello" isn't at the start



// + 
/**
 * the plus sign (+) is a quantifier 
 * that matches one or more occurrences of the preceding character or group.
 */

let regex1 = /a+/;
console.log("aaa".match(regex));  // Matches "aaa"
console.log("abc".match(regex));  // Matches "a"
console.log("bc".match(regex));   // No match, since "a" is not present


// * 
/**
 *  zero or more than zero
 */

let soccerWord = "goooooooooooal!"
let gPhrase = "gut feeling"
let oPhrase = "over the moon"
let goRegex = /go*/
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));


let chewieQuote = "Aaaaaaaaaaaaaaaarrrrrrgggghhh"
let chewieRegex = /Aa*/
console.log(chewieQuote.match(chewieRegex));





