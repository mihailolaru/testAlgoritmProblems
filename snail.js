const snail = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];

function parseSnail(arr) {
  let count = arr.length * arr[0].length;

  let row = 0;
  let left = 0;
  let right = 0;
  let down = 0;

  while (count > 0) {
    while (left < arr[row].length) {
      console.log(
        `State: count: ${count}, row: ${row}, left: ${left}, right: ${right}, down: ${down}`
      );

      console.log(arr[row][left]);
      left++;
      count--;
      down = arr.length;
    }

    row++;

    while (down > 0) {
      console.log(
        `State: count: ${count}, row: ${row}, left: ${left}, right: ${right}, down: ${down}`
      );

      console.log(arr[down - 1][row]);
      down--;
    }
  }
}

parseSnail(snail); // => Output

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
//
