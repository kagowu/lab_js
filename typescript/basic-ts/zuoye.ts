
const boolean1: boolean = true;
const null1: null = null;
const undefined1: undefined = undefined;
const number1: number = 1;
const string1: string = "123"
const symbol11: symbol = Symbol();
let object111: object;

let a1: any = 1;
console.log(a1);

a1 = "123"
console.log(a1);

function aa<T>(input: T): T {
    return input;
}


enum Direction {
    East,
    West,
    North,
    South
};
var dir: Direction = Direction.North;

function getDirection() {
    switch (dir) {
        case Direction.North: console.log('You are in North Direction');
            break;
        case Direction.East: console.log('You are in East Direction');
            break;
        case Direction.South: console.log('You are in South Direction');
            break;
        case Direction.West: console.log('You are in West Direction');
            break;
    }
}
getDirection();

type s = string;
let a11: s = "123"

let fun1 = (a: number) => ({ a, b: "hello" })
type Fun1ReturnType = ReturnType<typeof fun1>
typeof a11;
