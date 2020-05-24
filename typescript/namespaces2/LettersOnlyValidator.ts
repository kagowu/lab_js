/// <reference path="Validation.ts" />
namespace Validation {
    const letterRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return letterRegexp.test(s);
        }
    }
}