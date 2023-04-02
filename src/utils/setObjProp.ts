
export async function assign(obj: object, prop_: string | string[], value: any) {
    let prop: string[] = [""];
    if (typeof prop_ === "string") {
        let prop = prop_.split(".");
    }
    if (!obj) {
        obj = {l: 0}
    }
    if (prop.length > 1) {
        let e = prop.shift();
        // @ts-ignore
        await assign(obj[e] = Object.prototype.toString.call(obj[e]) === "[object Object]" ? obj[e] : {},
            prop,
            value);

    } else
        { // @ts-ignore
            obj[prop[0]] = value;
        }
}
