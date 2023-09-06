type One = string;
type Two = string | number;
type Three = "hello";

//convert to more/less specific
let ab: One = "hello";
let bc = ab as Two; // less specific
let cd = ab as Three; // more specific

// Can also use angle brackets
let d = <One>"world";
let e = <string | number>"world";
bc = <Two>ab;

// example when helpful
const addOrConcat = (
    a: number,
    b: number,
    c: "add" | "concat"
): number | string => {
    if (c === "concat") return a + b;
    return "" + a + b;
};

let result: string = addOrConcat(2, 3, "concat") as string; // Wont compile without "as string"

// example of assertion error that TS wont check
let res: number = addOrConcat(2, 3, "concat") as number; // expects number but string returned

// 10 as string
10 as unknown as string;

let img = document.querySelector("img");

// img.src; // ts doesnt like because img can be HTMLelement or null

img = document.querySelector("img") as HTMLImageElement;
img.src;
