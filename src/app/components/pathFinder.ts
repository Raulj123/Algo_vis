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
    
  }

  isValid(mark: boolean[][], col: number, row: number) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      return false;
    }
    if (mark[col][row]) {
      return false;
    }
    if (this.matrix[col][row] == 2) {
      return false;
    }
    return true;
  }

  dfs(col: number, row: number): boolean {
    var stack = [];
    stack.push([col, row]);

    while (stack.length != 0) {
      console.log(stack)
      var curr = stack[stack.length - 1];
      
      stack.pop();
      var col = curr[0];
      var row = curr[1];
      
      if (row == this.endRow && col == this.endCol) {
        break;
      }

      if (!this.isValid(this.mark, col, row)) {
        continue;
      }

      this.mark[col][row] = true;
      
      console.log(col, row)
      const dir = [
        [0, -1],
        [1, 0],
        [-1, 0],
        [0, 1],
      ];
    

      for (const [dy, dx] of dir) {
        const newRow = row + dx;
        const newCol = col + dy;
        
        if (this.isValid(this.mark, newCol, newRow)) {
          stack.push([newCol, newRow]);
        }
        
      }
    }
    this.mark[col][row] = true;
    return true;
  }

  bfs(row:number, col:number): boolean {
    var queue = []
    this.mark[row][col] = true;
    queue.push([row,col])
    
    const dir = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    while(queue.length !=0){
      const [currR, currC] = queue.shift()!;
      this.mark[currR][currC] = true;
      if (currR == this.endRow && currC == this.endCol) {
        break;
      }

      

      for(const [dx,dy] of dir){
        const newR: number = currR + dx;
        const newC: number = currC + dy;

        if(this.isValid(this.mark, newR, newC)){
          
          queue.push([newR, newC]);
        }
      }
    }
    
    return true
  }
}

export default PathFinder;
