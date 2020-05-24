let add2: (x: number, y: number) => number

function buildName(firstName: string, ...names: string[]) {
    return firstName + " " + names.join(",")
}