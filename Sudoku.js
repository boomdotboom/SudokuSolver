class Sudoku {
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    is_valid_move(board, row, col, num) {
        for (i in Range(9)) {
            if ((board[row][i] == num) || (board[i][col] == num))
                return false;
        }
        start_row, start_col = 3 * (row % 3), 3 * (col % 3);
        for (i in Range(start_row, start_row + 3)) {
            for (j in Range(start_col, start_col + 3)) {
                if (board[i][j] == num)
                    return false;
            }
        }
        return true;
    }
    randomSudoku() {

    }
    backtracking() {
        for (row in Range(9)) {
            for (col in Range(9)) {
                for (num in Range(1, 10)) {
                    if (is_valid_move(board, row, col, num)) {
                        board[row][col] = num;
                        if (backtracking()) {
                            return true;
                        }
                        board[row][col] = 0;
                        return false;
                    }
                }
            }
        }
        return true;
        printBoard();

    }
    printBoard() {
        for (row in Range(9)) {
            for (col in Range(9)) {
                print(board[row][col], end = " ");
            }
            print();
        }
    }

}