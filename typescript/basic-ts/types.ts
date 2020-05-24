function append(a: string, b: string) {
    return a + b;
}
let areYouOK: boolean = true;
let a: number = 1
let b: string = '12'
let c: number = 1_000_222
let sentence = `123${a}`
console.log(sentence)

let list: number[] = [1, 2, 4]

let list2: Array<number> = [1, 2, 3]

const age = 5

let oneString: string = "aadada"

let stringLength: number = (<string>oneString).length

function hello(arg: number): number {
    return arg;
}

function hello1(arg: string): string {
    return arg;
}

function hello2<T>(arg: T): T {
    return arg;
}

enum myEnum {
    First,
    Next
}

enum Enum {
    A
}

const L = Enum.A;
const nameOfA = Enum["A"];
console.log(nameOfA)

const symbol1 = Symbol()

const symbol2 = Symbol("hello");

// symbol1 === symbol2

const obj = {
    [symbol1]: "value"
}
console.log(obj[symbol1])

const array = [233, "heello", true]

for (let value of array)
    console.log(value)


const array1 = [3, 4, 5]

for (let i in array1) {
    console.log(i);//0,1,2
}


for (let i of array1) {
    console.log(i);//3, 4, 5
}

const fruits = new Set(["apple", "pear", "orange"])
// fruits["peeach"] = "Princess Peach"

for (let fruit in fruits) {
    console.log(fruit)
}
for (let fruit of fruits) {
    console.log(fruit)
}

// generator
function* infiniteList() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}
// var iterator = infiniteList();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

function* generator() {
    const who = yield;
    console.log("hello " + who)
    yield who
}
// const iterator2 = generator()
// console.log(iterator2.next())
// console.log(iterator2.next("typescript"))

function* generatorError() {
    try {
        yield 1;
    } catch (error) {
        console.log(error.message)
    }
}

const iterator3 = generator();
iterator3.next()

iterator3.throw(new Error("something Incorrect"))