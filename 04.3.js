function multiplyMatrices(matrixA, matrixB) {
  let rowsA = matrixA.length,
    columnsA = matrixA[0].length,
    rowsB = matrixB.length,
    columnsB = matrixB[0].length;
  let resultMatrix = createMatrix(rowsA, columnsB);
  if (columnsA !== rowsB) {
    return null; // ไม่สามารถคูณได้
  }
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < columnsB; j++) {
      for (let k = 0; k < columnsA; k++) {
        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return resultMatrix;
}

let matrixA = [
  [11, 9, 7],
  [5, 3, 1],
];
let matrixB = [
  [8],
  [6],
  [2],
];

console.log(matrixA);
console.log(matrixB);
console.log(multiplyMatrices(matrixA, matrixB));