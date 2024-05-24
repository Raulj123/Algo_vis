const rows = 10;
const cols = 10;
const matrix: number[][] = [];
const startRow = 2;
const startCol = 0;
const endRow = 7;
const endCol = 9;

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = 1;
  }
}

matrix[startRow][startCol] = 0;
matrix[endRow][endCol] = 0;

// This is making a wall

matrix[7][2] = 2;
matrix[6][2] = 2;
matrix[5][2] = 2;
matrix[4][2] = 2;
matrix[4][3] = 2;
matrix[4][4] = 2;
matrix[4][5] = 2;
matrix[3][5] = 2;
matrix[2][5] = 2;

export { matrix, startRow, startCol, endRow, endCol };
