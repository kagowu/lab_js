class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrgin(point: { x: number; y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist);

    }
    constructor(public scale: number) {


    }

}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.5);
console.log(grid1.calculateDistanceFromOrgin({ "x": 10, "y": 10 }))
console.log(grid2.calculateDistanceFromOrgin({ "x": 10, "y": 10 }))

abstract class AbstractAnimal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...")
    }
}

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log("Department name:" + this.name);
    }
    abstract printMessage(): void;
}

class AccountingDepartment extends Department {
    printMessage(): void {
        console.log("The Acccounting Department meets each Monday at 10 am.")
    }
    constructor() {
        super('Accounting and Auditing');
    }
    generateReports(): void {
        console.log("Generating accounting reports...")
    }


}

let department: Department;

department = new AccountingDepartment();


department.printMessage();
// department.generateReports();

