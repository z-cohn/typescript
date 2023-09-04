let a = 1;
let b: any;

b = 1;
b = "a";

const sum = (a: number, b: number) => {
    return a + b;
};

let re: RegExp = /\w+/g;

const myObj = {
    prop1: "Zach",
    prop2: "Cohn",
};

console.log("type of myObj: " + typeof myObj);

type stringOrNumber = string | number;

interface Guitarist {
    name?: string;
    active?: boolean;
    albums: stringOrNumber[];
}

let evh: Guitarist = {
    // name: 'Van halen',
    active: false,
    albums: [1984, "myAlbum"],
};

let jimmy: Guitarist = {
    name: "jimmy",
    albums: ["1"],
};

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
    return "Hello!";
};

console.log(greetGuitarist(evh));

let myName = "zach";

let username: "zach" | "adina" | "orly";

username = "adina";

const logMsg = (message: any): void => {
    console.log(message);
};

logMsg("hi");
logMsg(sum(2, 3));

let subtract = function (c: number, d: number): number {
    return c - d;
};

type mathFunc = (a: number, b: number) => number;
// interface mathFunc {
//     (a: number, b: number): number
// }

let multiply: mathFunc = function (a, b) {
    return a * b;
};

logMsg(multiply(2, 2));

const addAll = (a: number, b: number, c?: number) => {
    if (typeof c !== "undefined") return a + b + c;
    return a + b;
};

const sumAll = (a: number, b: number, c: number = 2) => {
    return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 4, 4));

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError("This should never happen!");
};
