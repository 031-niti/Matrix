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
  [1, 2],
  [3, 4],
];
let matrixB = [
  [2, 0],
  [1, 2],
];

console.log(matrixA);
console.log(matrixB);
console.log(multiplyMatrices(matrixA, matrixB));
