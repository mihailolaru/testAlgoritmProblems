// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
// Accepted
// 1,420,273

// function checkAscending( arr ) {
//   if (arr.length > 0) {
//     if (arr.every((value, index) => typeof value === "number")) {
//       if (arr.every((value, index) => value >= -104 && value <= 104)) {
//         return arr.every((value, index) => value >= arr[index - 1]);
//       }
//       return false;
//     }
//     return false;
//   }
//   return false;
// }

// function arraySearch(nums, target, start, end = nums.length - 1) {
//   const mid = Math.floor(start + end) / 2;

//   if (
//     Array.isArray(nums) &&
//     nums.length > 0 &&
//     target >= -104 &&
//     target <= 104 &&
//     checkAscending(nums)
//   ) {
//     if (nums[mid] === target)
//       return console.log("Output: ", indexOf(nums[mid]));

//     if (nums[mid] < target) {
//       return arraySearch(nums, target, mid + 1, end);
//     } else {
//       return arraySearch(nums, target, 0, mid - 1);
//     }
//   }
//   return console.log(
//     "The param passed to the function does not match the requirements. Please check again the req list."
//   );
// }

// arraySearch([1, 3, 5, 6], 5);

// function arrSearch(nums, target){
// 	return nums.findIndex(value=> value>=target)===-1 ? nums.length : nums.findIndex(value=>value>=target);
// }

// function arrSearch(nums, target){
// 	for(let index=0;index<nums.length;index++){
// 		if(nums[index]>=target) return index;
// 	}
// 	return nums.length;
// }

// console.log(arrSearch([1,3,5,6], 7));

