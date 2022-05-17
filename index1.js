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
// function integerToRoman(numb) {
//   const ones = Math.floor(numb % 10);
//   const tenths = Math.floor((numb / 10) % 10);
//   const hundreds = Math.floor((numb / 100) % 10);
//   const thousands = Math.floor(numb / 1000);

//   let romanNumber = "";

//   if (thousands > 0) {
//     romanNumber += "M";
//   }

//   if (hundreds > 0) {
//     if (hundreds === 5) {
//       romanNumber += "D";
//       //Extend the conditional logic
//     } else if (hundreds < 10) {
//       romanNumber += "CM";
//     } else {
//       for (let count = 0; count < hundreds; count++) {
//         romanNumber += "C";
//       }
//     }
//   }

//   if (tenths > 0) {
//     if (tenths === 1) {
//       romanNumber += "X";
//     } else if (tenths === 5) {
//       romanNumber += "L";
//       //Extend the conditional logic
//     } else if (tenths < 10 && tenths > 2) {
//       romanNumber += "XC";
//     } else {
//       for (let count = 0; count < tenths; count++) {
//         romanNumber += "X";
//       }
//     }
//   }

//   if (ones > 0) {
//     if (ones === 5) {
//       romanNumber += "V";
//     } else if (ones < 10 && ones > 8) {
//       for (let count = 0; count < 10 - ones; count++) {
//         romanNumber += "I";
//       }
//       romanNumber += "X";
//     } else if (ones <= 8 && ones > 5) {
//       romanNumber += "V";
//       for (let count = 0; count < ones - 5; count++) {
//         romanNumber += "I";
//       }
//     } else if (ones < 5 && ones > 3) {
//       for (let count = 0; count < 5 - ones; count++) {
//         romanNumber += "I";
//       }
//       romanNumber += "V";
//     } else {
//       for (let count = 0; count < ones; count++) {
//         romanNumber += "I";
//       }
//     }
//   }

//   return romanNumber;
// }

// console.log(" *** Vr I *** ");
// console.log("");
// console.log(integerToRoman(3));
// console.log(integerToRoman(58));
// console.log(integerToRoman(1994));
// console.log(integerToRoman(4));
// console.log(integerToRoman(9));
// console.log("");
// console.log(" *** Vr II *** ");
// console.log("");

function integerToRomanII(numb) {
  
  let romanNumber = "";

  const M = Math.floor(numb / 1000);
  if (M > 0) {
      romanNumber += "M".repeat(M);
      numb -= M * 1000;
  }
  
  const CM = Math.floor(numb / 900);
  if (CM > 0) {
      romanNumber += "CM"
      numb -= CM * 900;
  }

  const D = Math.floor(numb / 500);
  if (D > 0) {
      romanNumber += "D".repeat(D);
      numb -= D * 500;
  }

  const CD = Math.floor(numb / 400);
  if (CD > 0) {
      romanNumber += "CD";
      numb -= CD * 400;
  }

  const C = Math.floor(numb / 100);
  if( C > 0 ){
    romanNumber += "C".repeat(C);
    numb -= C * 100;
  }

  const XC = Math.floor(numb / 90);
  if(XC > 0){
    romanNumber += "XC";
    numb -= XC * 90;
  }

  const L = Math.floor( numb / 50);
  if( L > 0 ){
    romanNumber += "L".repeat(L);
    numb -= L * 50;
  }

  const XL = Math.floor( numb / 40);
  if( XL > 0 ) {
    romanNumber += "XL";
    numb -= XL * 40;
  }

  const X = Math.floor( numb / 10);
  if( X > 0 ){
    romanNumber += "X".repeat(X)
    numb -= X * 10;
  }

  const IX = Math.floor( numb / 9);
  if( IX > 0 ){
    romanNumber += "IX";
    numb -= IX * 9;
  }

  const V = Math.floor( numb / 5);
  if (V > 0){
    romanNumber += "V".repeat(V);
    numb -= V * 5;
  }

  const IV = Math.floor( numb / 4 );
  if (IV > 0){
    romanNumber += "IV";
    numb -= IV * 4;
  }

  romanNumber += "I".repeat(numb);
  numb -= numb; 

  return {romanNumber, numb};
}

console.log(integerToRomanII(3));
console.log(integerToRomanII(58));
console.log(integerToRomanII(1994));
console.log(integerToRomanII(4));
console.log(integerToRomanII(9));