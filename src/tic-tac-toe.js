class TicTacToe {
    constructor() {
        this.matrix = [
            ['','',''],
            ['','',''],
            ['','',''],
        ];
        this.symbol = 'o';
        this.noTurns = false;
        this.isFinish = false;
    }

    getCurrentPlayerSymbol() {
        if (this.symbol == 'x') {
            return 'o';
        } else {
            return 'x';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        this.symbol = this.getCurrentPlayerSymbol();
        if (this.matrix[rowIndex][columnIndex]) {
            this.symbol = this.getCurrentPlayerSymbol();
        } else {
            this.matrix[rowIndex][columnIndex] = this.symbol;
        }
        this.getStatus();
    }

    getStatus() {
        this.isFinish = false;
        if ((this.matrix[0][0] == 'x' && this.matrix[1][0] == 'x' && this.matrix[2][0] == 'x') || (this.matrix[0][0] == 'o' && this.matrix[1][0] == 'o' && this.matrix[2][0] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[0][1] == 'x' && this.matrix[1][1] == 'x' && this.matrix[2][1] == 'x') || (this.matrix[0][1] == 'o' && this.matrix[1][1] == 'o' && this.matrix[2][1] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[0][2] == 'x' && this.matrix[1][2] == 'x' && this.matrix[2][2] == 'x') || (this.matrix[0][2] == 'o' && this.matrix[1][2] == 'o' && this.matrix[2][2] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[0][0] == 'x' && this.matrix[0][1] == 'x' && this.matrix[0][2] == 'x') || (this.matrix[0][0] == 'o' && this.matrix[0][1] == 'o' && this.matrix[0][2] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[1][0] == 'x' && this.matrix[1][1] == 'x' && this.matrix[1][2] == 'x') || (this.matrix[1][0] == 'o' && this.matrix[1][1] == 'o' && this.matrix[1][2] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[2][0] == 'x' && this.matrix[2][1] == 'x' && this.matrix[2][2] == 'x') || (this.matrix[2][0] == 'o' && this.matrix[2][1] == 'o' && this.matrix[2][2] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[0][0] == 'x' && this.matrix[1][1] == 'x' && this.matrix[2][2] == 'x') || (this.matrix[0][0] == 'o' && this.matrix[1][1] == 'o' && this.matrix[2][2] == 'o')) {
            this.isFinish = true;
        } else if ((this.matrix[0][2] == 'x' && this.matrix[1][1] == 'x' && this.matrix[2][0] == 'x') || (this.matrix[0][2] == 'o' && this.matrix[1][1] == 'o' && this.matrix[2][0] == 'o')) {
            this.isFinish = true;
        }
        
        return this.isFinish;
    }

    isFinished() {
        return this.isFinish || this.isDraw(); 
    }

    getWinner() {
        if (this.isFinish) {
            return this.symbol;
        } else {
            return null;
        }
    }

    noMoreTurns() {
        this.noTurns = true;
        this.matrix.forEach( arr => {
            arr.forEach( item => {
                if ( item == '' || item == false) {
                    this.noTurns = false;
                }
            });
        });
        return this.noTurns;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.isFinish) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex]) {
            return this.matrix[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
