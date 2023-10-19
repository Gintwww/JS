function addMatrices(matrixA, matrixB) {
    
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      console.log("Размеры матриц не совпадают. Невозможно сложить.");
      return null;
    }
  
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;
  
    
    const resultMatrix = new Array(numRows);
  
    for (let i = 0; i < numRows; i++) {
      resultMatrix[i] = new Array(numCols);
      for (let j = 0; j < numCols; j++) {
        
        resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
      }
    }
  
    return resultMatrix;
  }
  
  const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  const matrixB = [
    [7, 8, 9],
    [10, 11, 12],
  ];
  
  const result = addMatrices(matrixA, matrixB);
  
  if (result) {
    for (let row of result) {
      console.log(row);
    }
  }
  