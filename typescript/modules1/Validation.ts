export interface StringValidation {
    isAcceptable(s: String): boolean;
}

export const numberRegexp = /^[0-9]+$/;


declare let $: StringValidation
export default $;