const rows = 10;
const cols = 10;
const matrix: number[][] = [];
const startRow = 1;
const startCol = 1;
const endRow = 9;
const endCol = 7;

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = 1;
  }
}

matrix[startCol][startRow] = 0;
matrix[endCol][endRow] = 0;

// This is making a wall

matrix[4][2] = 2;
matrix[4][3] = 2;
matrix[4][4] = 2;
matrix[4][5] = 2;
matrix[4][6] = 2;
matrix[5][6] = 2;
matrix[6][6] = 2;


export { matrix, startRow, startCol, endRow, endCol };
