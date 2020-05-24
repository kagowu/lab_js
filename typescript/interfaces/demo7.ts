class Employee {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}

let employee = new Employee();

employee.fullName = "Bob Smith";

if (employee.fullName) {
    console.log(employee.fullName);

}


class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}

let dad=new Octopus("Man with the 8 strong legs");
// dad.name=""