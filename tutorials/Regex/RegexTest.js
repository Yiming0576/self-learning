// regex  using test method

let sentence = "The dog chase the cat.";
let regex = /the/;

let myString = "Hello, World!";
let myRegex = /Hello/;
let resultOne = myRegex.test(myString);
console.log({ result: resultOne });

let waldoIsHiding = "Somewhere Waldo is hiding in this text"
let waldoRegex = /Waldo/
let resultTwo = waldoRegex.test(waldoIsHiding);
console.log({result: resultTwo});


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

