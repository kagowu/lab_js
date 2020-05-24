interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 }
// p1.x 

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0]=12

a = ro as number[]
a[0]

