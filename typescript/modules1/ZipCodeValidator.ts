import { StringValidation,numberRegexp } from "./Validation";
class ZipCodeValidator implements StringValidation {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator }
export { ZipCodeValidator as mainValidator }

export { ZipCodeValidator as RegExpBasedZIpCodeValidator } from "./ZipCodeValidator";