const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        result[j] = [];
      }
      result[j].push(matrix[i][j]); // inserts the value of matrix[i][j] at result[j][i]
    }
    // result
  }
  return result;
};




// // [ [1, 1, 1, 1], [2, 2, 2, 2]]
// 1 
// 2
// 3
// 4

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));


// // expected output
// // 1 1 1 1 
// // 2 2 2 2 
// // 3 3 3 3 
// // 4 4 4 4

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));