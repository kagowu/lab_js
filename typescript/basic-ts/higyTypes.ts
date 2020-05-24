// interface
interface A {
    a: number,
    b: string,
    c: number[]
}
let aa: number | string
aa = 1
// console.log(aa.a)

interface Person {
    age: number
}
class Father {
    age: number
}

let person: Person
person = new Father()