interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;

}

mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;

}

interface StringArray {
    [index: number]: string;
    // [index: string]: string;
}
let myArray: StringArray;

myArray = ["Blob", "Fred"]

let myStr: string = myArray["123"]

interface NumberDictionary {
    readonly [index: number]: string;
    // [index: string]: number;
    length: number;
    name: string;
}
