const snailL = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];

/*
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

const snailS = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

/*
0 [0, 1, 2]
1 [0, 1, 2]
2 [0, 1, 2]

right 0.0 0.1 
down  0.2 1.2
left  2.2 2.1
up    2.0 1.0
right 1.1
*/

const snailM = [
  [1, 2, 3],
  [12, 13, 4],
  [11, 14, 5],
  [10, 15, 6],
  [9, 8, 7],
];

function parseSnail(arr) {
  let arrYLength = arr.length;
  let arrXLength = arr[0].length;
  let increment = 1;
  let startPoint = 0;

  for (
    ;
    arrXLength > Math.floor(arr[0].length / 2) &&
    arrYLength > Math.floor(arr.length / 2);

  ) {
    console.log("");
    console.log("arrYLength", arrYLength);
    console.log("arrXLength", arrXLength);
    console.log("increment", increment);
    console.log("startPoint", startPoint);

    // right
    for (let x = startPoint; x < arrXLength - increment; x++) {
      console.log(`right [${startPoint}][${x}] `, arr[startPoint][x]);
    }

    //down
    for (let y = startPoint; y < arrYLength - increment; y++) {
      console.log(
        `down  [${y}][${arrYLength - increment}] `,
        arr[y][arrYLength - 1]
      );
    }

    //left
    for (let x = arrXLength - increment; x > 0; x--) {
      console.log(
        `left  [${arrXLength - increment}][${x}] `,
        arr[arrXLength - increment][x]
      );
    }

    //up
    for (let y = arrYLength - increment; y > 0; y--) {
      console.log(`up    [${y}][${startPoint}] `, arr[y][startPoint]);
    }

    arrYLength--;
    arrXLength--;
    increment++;
    startPoint++;

    console.log("arrYLength", arrYLength);
    console.log("arrXLength", arrXLength);
    console.log("increment", increment);
    console.log("startPoint", startPoint);
  }
}

parseSnail(snailL);
