import Ship from "./ship"


export default class GameBoard {
    missedAttacks: number[][]
    hitAttacks: number[][] 
    shipsSunk: number
    ships: any
    

    constructor() {
        this.missedAttacks = []
        this.shipsSunk = 0
        //?
        this.ships = []
        this.hitAttacks = []

    }
    setShipPostions() {
        //first find how long the ship, suppose length is 4, we can pick randomly to decide either vertical or horizontal 
        //if vertival 
        //y cordinate: 0 to n - 4 *exclusive
        //x cordinate: 0 to n *exclusive 
       // 1	Carrier	5
        // if interfere ship then move down by one, then move right by one 
        const carrier = new Ship(5, [[1,1],[1,2],[1,3],[1,4],[1,5]], 'Carrier')
       // 2	Battleship	4
        const battleship = new Ship(4, [[2,1],[2,2],[2,3],[3,4]], 'Battleship')
       // 3	Destroyer	3
        const destroyer = new Ship(3, [[3,1],[3,2],[3,3]], 'Destroyer')
        
       // 4	Submarine	3
        const submarine = new Ship(3, [[4,1],[4,2],[4,3]], 'Submarine')
       // 5	Patrol Boat	2
        const patrolBoat = new Ship(2, [[5, 1], [5, 2]], 'Patrol Boat')
        this.ships = [carrier, battleship, destroyer, submarine, patrolBoat]
    }
    recieveAttack(cordinate: number[]) {
        //takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].hit(cordinate)) {
                return this.hitAttacks.push(cordinate)
            };
        }
        this.missedAttacks.push(cordinate)
     }

    checkShipsSunk() {
        return this.shipsSunk === 5
    }
    
}