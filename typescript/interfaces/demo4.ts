interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{}
square.color = "blue"
square.sideLength = 123


interface PenStroke {
    penWidth: number
}

interface Square2 extends Shape, PenStroke, Square {
    sideLength: number;
}

let square2 = <Square2>{

}

square2.color = "red";
square2.sideLength = 10;
square2.penWidth = 5.0;

