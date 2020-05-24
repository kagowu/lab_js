function padLef(value: string, padding: number) ;
function padLef(value: string, padding: string) ;

function padLef(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number,got '${padding}'`)
}

padLef("Hello world", 4)