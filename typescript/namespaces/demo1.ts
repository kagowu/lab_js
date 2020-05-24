namespace Validation0 {
    export interface StringValidator {
        isAcceptable(S: string): boolean;
    }

    const letterRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator0 implements StringValidator {
        isAcceptable(s: string) {
            return letterRegexp.test(s);
        }
    }

    export class ZipCodeValidator0 implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings0 = ["Hello", "98052", "101"];

let validators0: {
    [s: string]: Validation0.StringValidator;
} = {};

validators0["Zip code"] = new Validation0.ZipCodeValidator0();
validators0["Letters only"] = new Validation0.LettersOnlyValidator0();

for (let s of strings0) {
    for (let name in validators0) {
        console.log(`"${s}"- ${validators0[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`)
    }
}