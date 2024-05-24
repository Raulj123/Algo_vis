class PathFinder {
  matrix: number[][];
  rows: number;
  cols: number;
  mark: boolean[][];
  queue: number[][];
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;

  constructor(
    matrix: number[][],
    startRow: number,
    startCol: number,
    endRow: number,
    endCol: number
  ) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.mark = new Array(this.rows)
      .fill(0)
      .map(() => new Array(this.cols).fill(false));
    this.queue = [];
    this.startRow = startRow;
    this.startCol = startCol;
    this.endRow = endRow;
    this.endCol = endCol;
    this.dfs(startRow, startCol);
  }

  isValid(mark: boolean[][], row: number, col: number) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      return false;
    }
    if (mark[row][col]) {
      return false;
    }
    if (this.matrix[row][col] == 2) {
      return false;
    }
    return true;
  }

  dfs(row: number, col: number): boolean {
    var stack = [];
    stack.push([row, col]);

    while (stack.length != 0) {
      var curr = stack[stack.length - 1];
      stack.pop();
      var row = curr[0];
      var col = curr[1];
      console.log(row, col);
      if (row == this.endRow && col == this.endCol) {
        break;
      }

      if (!this.isValid(this.mark, row, col)) {
        continue;
      }

      this.mark[row][col] = true;

      const dir = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dx, dy] of dir) {
        const newRow = row + dx;
        const newCol = col + dy;
        stack.push([newRow, newCol]);
      }
    }
    this.mark[row][col] = true;
    return true;
  }
}

export default PathFinder;
