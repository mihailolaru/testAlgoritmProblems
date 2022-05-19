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

function parseSnail(arr) {
  let length = arr.length;
  console.log("length: ", length);

  // right
  for (let x = 0; x < length - 1; x++) {
    console.log(`[0][${x}] `, arr[0][x]);
  }

  //down
  for (let x = 0; x < length - 1; x++) {
    console.log(`[${x}][${length - 1}] `, arr[x][length - 1]);
  }

  //left
  for (let x = length - 1; x > 0; x--) {
    console.log(`[${length - 1}][${x}] `, arr[length - 1][x]);
  }

  //up
  for (let x = length - 1; x > 0; x--) {
    console.log(`[${x}][${0}] `, arr[x][0]);
  }

  length--;
  console.log("length:", length);
}

parseSnail(snail);

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
