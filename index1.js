// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/* ### Roman to int ### */
// const parseRomanNumberToInteger = (romanNumber) => {
// 	const romanNumberMap = {
// 		M: 1000,
// 		D: 500,
// 		C: 100,
// 		L: 50,
// 		X: 10,
// 		V: 5,
// 		I: 1
// 	}
// 	let total = 0;

// 	for(let idx=0; idx < romanNumber.length; idx++) {
// 		if (romanNumberMap[romanNumber[idx]] < romanNumberMap[romanNumber[idx+1]]){
// 			total -= romanNumberMap[romanNumber[idx]];
// 		} else {
// 			total += romanNumberMap[romanNumber[idx]];
// 		}
// 	}
// 	return total;
//   };

//   console.log(parseRomanNumberToInteger("III"));
//   console.log(parseRomanNumberToInteger("LVIII"));
//   console.log(parseRomanNumberToInteger("MCMXCIV"));
//   console.log(parseRomanNumberToInteger("IV"));
//   console.log(parseRomanNumberToInteger("IX"));

/* ### Int to roman ### */
function integerToRoman(numb) {
  const romanNumberMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  

  const ones = Math.floor(numb % 10);
  const tens = Math.floor((numb / 10) % 10);
  const hundreds = Math.floor((numb / 100) % 10);
  const thousands = Math.floor(numb / 1000);

  let romanNumber = "";

  switch (numb) {
    case thousands > 0:
      for (let count = 0; count < thousands; count++) {
        romanNumber += "M";
      }
    case hundreds > 0:
      for (let count = 0; count < hundreds; count++) {
        romanNumber += "C";
      }
    case tens > 0:
      for (let count = 0; count < tens; count++) {
        romanNumber += "X";
      }
    case ones > 0:
      for (let count = 0; count < ones; count++) {
        romanNumber += "I";
      }
  }

  return [romanNumber, ones, tens, hundreds, thousands];
}

// console.log("3", integerToRoman(3) );
// console.log("58", integerToRoman(58) );
// console.log("1994", integerToRoman(1994) );
// console.log("4", integerToRoman(4) );
// console.log("9", integerToRoman(9) );

console.log(integerToRoman(3));
console.log(integerToRoman(58));
console.log(integerToRoman(1994));
console.log(integerToRoman(4));
console.log(integerToRoman(9));
