function generateRandomMatrix(m, n) {
    
    const matrix = new Array(m);
    for (let i = 0; i < m; i++) {
      matrix[i] = new Array(n);
    }
  
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        
        matrix[i][j] = Math.random();
      }
    }
  
    return matrix;
  }
  
  
  const numRows = 3;
  const numCols = 4; 
  const randomMatrix = generateRandomMatrix(numRows, numCols);
  
  for (let row of randomMatrix) {
    console.log(row);
  }
  