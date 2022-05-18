// Your task is to write some implementations (described at the end of the current task) for the next function:

// function replaceSubstrings(initialString: string, oldSubstring: string, newSubstring: string): string;

// the function should replace ALL occurrences of oldSubstring with newSubstring

// Some examples of correct function's work

// // should replace all occurrences
// replaceSubstrings(
//   '123 abc 123 abc 123 abc 132 1bc 123',
//   '123',
//   '!!!'
// ) -> '!!! abc !!! abc !!! abc 132 1bc !!!'

// // should return initial string if no match
// replaceSubstrings('some text', 'ooops', '!') -> 'some text'

// // should oldSubstring and newSubstring can have different lengths
// replaceSubstrings('a random text with some words and letter a', 'a', '!!!') -> '!!! r!!!ndom text with some words !!!nd letter !!!'
// replaceSubstrings('!abc!', 'abc', '1') -> '!1!'

// // newSubstring can be empty in this case it should replace all occurrences with nothing
// replaceSubstrings('tttttttttttt', 't', '') -> ''

// String.prototype.replaceAll method is banned for all solutions

// # solution 1 - bare metal
// allowed to use only `for` `if` and other native js statements (no method, allowed syntax only before ES5)
// NB: since JS's strings are imutable, to implement the function in this way you should use arrays
// so for this implementation you should use arrays instead of strings
// example:
// replaceSubstrings(['s', 'o', 'm', 'e'], ['o'], ['!']) -> ['s', '!', 'm', 'e']

// # solution 2 - should use regexp

// # solution 3 - can use any methods, but banned regexp and native statements (`for`, `if` and so on)



/* ### Implementation with methods. ### */

function replaceSubstringsMethods(initialString, oldSubstring, newSubstring) {
  initialString = initialString.includes(oldSubstring)
  ? initialString.replace(oldSubstring, newSubstring)
  : initialString;

  return initialString.includes(oldSubstring) ? replaceSubstringsMethods(initialString, oldSubstring, newSubstring) : initialString;  
}

console.log("Implementation with methods");
console.log(replaceSubstringsMethods('a random text with some words and letter a', 'a', '!!!'));
console.log("");
console.log("Implementation with native js statements.");

/* ### Implementation with native js statements. ### */

function replaceSubstringsNative(initialString, oldSubstring, newSubstring) {
  let subStringsEquality = false;

  let eqStartIndex = 0;

  //Check if the old substring first char is present in the initialString.
  for (let index = 0; index < initialString.length; index++) {
    if (initialString[index] === oldSubstring[0]) {
      eqStart = index;
      break;
    }
  }   

  //If the whole oldSubstring is present in the
  if (subStringsEquality) {
	
  }

  return initialString;
}

console.log(replaceSubstringsNative(["H", "e", "l", "l", "o"], ["l"], ["m"]));
