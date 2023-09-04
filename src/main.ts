let username = 'zachy'
console.log(username)

let a = 1
let b: any;

b = 1;
b = 'a'

const sum = (a: number, b: string) => {
    return a + b;
}

let re: RegExp = /\w+/g

const myObj = {
    prop1: 'Zach',
    prop2: 'Cohn'
};

console.log("type of myObj: " + typeof myObj)

interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    // name: 'Van halen',
    active: false,
    albums: [1984, "myAlbum"]
}

let jimmy: Guitarist = {
    name: 'jimmy',
    albums: ['1']
}
const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`
    }
    return "Hello!"
}

console.log(greetGuitarist(evh))
