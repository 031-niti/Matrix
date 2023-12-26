// function createMatrix(rows, columns) {
//   let matrix = new Array(rows);
//   for (let i = 0; i < rows; i++) {
//     matrix[i] = new Array(columns).fill(0);
//   }
//   return matrix;
// }

// a = [
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
// ];
// console.log(a.length);
// console.log(a[0].length); 

function createMatrix(rows, columns) {
  let matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns).fill(0);
  }
  return matrix;
}
