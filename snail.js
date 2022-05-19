const snail = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];

const snail2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

const snail3 = [
  [1, 2, 3],
  [12, 13, 4],
  [11, 14, 5],
  [10, 15, 6],
  [9, 8, 7],
];

function parseSnail(arr) {
  let arrLength = arr.length;
  let increment = 1;
  let startPoint = 0;

  console.log("");
  console.log("arrLength: ", arrLength);
  console.log("increment: ", increment);
  console.log("");

  // right
  for (let x = 0; x < arrLength - increment; x++) {
    console.log(`right [${startPoint}][${x}] `, arr[startPoint][x]);
    count++;
    console.log("count", count);
  }

  //down
  for (let x = 0; x < arrLength - increment; x++) {
    console.log(
      `down [${x}][${arrLength - increment}] `,
      arr[x][arrLength - 1]
    );
    count++;
    console.log("count", count);
  }

  //left
  for (let x = arrLength - increment; x > 0; x--) {
    console.log(
      `left [${arrLength - increment}][${x}] `,
      arr[arrLength - increment][x]
    );
    count++;
    console.log("count", count);
  }

  //up
  for (let x = arrLength - increment; x > 0; x--) {
    console.log(`up [${x}][${startPoint}] `, arr[x][startPoint]);
    count++;
    console.log("count", count);
  }

  arrLength--;
  increment++;
  startPoint++;

  console.log("");
  console.log("arrLength: ", arrLength);
  console.log("increment: ", increment);
  console.log("");
}

parseSnail(snail2);

/*
0 [0, 1, 2]
1 [0, 1, 2]
2 [0, 1, 2]

right 0.0 0.1 
down  0.2 1.2
left  2.2 2.1
up    2.0 1.0
right 1.1

0 [ 0, 1, 2, 3, 4],
1 [ 0, 1, 2, 3, 4],
2 [ 0, 1, 2, 3, 4],
3 [ 0, 1, 2, 3, 4],
4 [ 0, 1, 2, 3, 4],

right 0.0 0.1 0.2 0.3
down  0.4 1.4 2.4 3.4 
left  4.4 4.3 4.2 4.1
up    4.0 3.0 2.0 
right 1.0 1.1 1.2
down  1.3 2.3
left  3.3 3.2
up    3.1 
right 2.1 2.2

*/
