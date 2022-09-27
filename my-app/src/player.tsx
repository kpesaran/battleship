import GameBoard from './gameBoard'

let grid: number[][] = []

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let cord = [i, j]
        grid.push([i,j])
    } 
}


export default class Player {
    playersTurn: Boolean
    computer: Boolean | undefined
    previousAttackCordinates: number[][]
    moveOptions: number[][]
    //gameBoard: object
    constructor(isComputer: Boolean, goesFirt: Boolean) {
        this.computer = isComputer
        this.playersTurn = goesFirt
        this.previousAttackCordinates = []
        this.moveOptions = grid
    }
    
    randomMove() {
        if (this.computer) {
            let randomNumber: number = Math.floor(Math.random() * (this.moveOptions.length));
            
            const cordXY: number[] = this.moveOptions[randomNumber];
            this.moveOptions = this.moveOptions.filter(cordinate => cordinate[0] !== cordXY[0] && cordinate[1])
        }
    }

}
