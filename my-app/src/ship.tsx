

//factory function creates a class for you, initilize ship for you

type Direction = 'vertical' | 'horizontal'

export default class Ship {
    hitPositions: number[][]
    name: string
    hitNumber: number
    sizeShip: number
    boardPosition: number[][] | undefined
    direction: Direction = "vertical"
    constructor(sizeShip: number, position: number[][] | undefined, name: string) {
        this.sizeShip = sizeShip
        this.hitPositions = []
        this.boardPosition = position
        this.hitNumber = 0
        this.name = name
    }
    baseCase() {
        this.boardPosition = [[1,1],[1,2],[1,3],[1,4]]
    }
    hit(xyPosition: number[]) {
        this.boardPosition?.forEach(cordinate => {
            
            if (xyPosition[0] === cordinate[0] && xyPosition[1] === cordinate[1]) {
                this.hitPositions.push(xyPosition) 
                console.log('hit on cordinate: ', xyPosition)
                this.hitNumber += 1
                return true
            }
        })
    }
    isSunk() {
        return this.hitNumber === this.sizeShip 
    }
        
}

// const ship1 = new Ship(4, undefined)

// ship1.isSunk()

