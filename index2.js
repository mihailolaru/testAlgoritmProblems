const snail = [
    [1,  2,  3,  4,  5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
];

function parseSnail( arr ) {
	for( let i = 0; i < arr.length; i++ ){
		for( let y = 0; y < arr.length; y++ ){
			console.log(arr[i][y]);
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