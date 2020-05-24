interface SquareConfig {
    color?: string,
    width?: number,
    [proName: string]: any;// 索引签名
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare;
}

let mySquare = createSquare({ color: "blank" })

let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)

