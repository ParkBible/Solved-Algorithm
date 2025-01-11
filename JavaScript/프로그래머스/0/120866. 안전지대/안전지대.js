function solution(board) {
    const newBoard = JSON.parse(JSON.stringify(board));
        
    const setDanger = (x, y) => {
        if (newBoard[x] !== undefined && newBoard[y] !== undefined) {
            newBoard[y][x] = 1;
        }
    }
    
    board.forEach((line, y) => {
        line.forEach((dot, x) => {
            if (dot === 1) {
                setDanger(x - 1, y - 1);
                setDanger(x - 1, y);
                setDanger(x - 1, y + 1);
                setDanger(x, y - 1);
                setDanger(x, y);
                setDanger(x, y + 1);
                setDanger(x + 1, y - 1);
                setDanger(x + 1, y);
                setDanger(x + 1, y + 1);
            }
        })
    });
    
    return newBoard.flat().filter(b => b === 0).length;
}