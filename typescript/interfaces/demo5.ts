class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello," + this.greeting
    }
}
let greet = new Greeter("world")


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date)
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {

    }
    setTime(d: Date) {
        throw new Error("Method not implemented.");
    }
}


