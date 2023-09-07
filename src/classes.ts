// too long
// class Coder {
//     name: string;
//     music: string;
//     age: number;
//     lang: string;

//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }

//if you add access modifiers, no need to instantiate outside of constructor
class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "typescript" // default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`;
    }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age); // ts doesnt like bc age is private (but will still work bc technically kosher js!!)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev("mac", "sara", "pop", 22);
console.log(Sara.getLang());
// console.log(Sara.lang); //Bad because protected

/////////////////////////////////////////////////////

interface Musician {
    mName: string;
    instrument: string;
    play(action: string): string;
}

class Pianist implements Musician {
    mName: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.mName = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.mName} ${action} the ${this.instrument}`;
    }
}

const Smith = new Pianist("John", "piano");
console.log(Smith.play("plays"));
///////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number
    
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count);
console.log(Amy.id);
console.log(John.id);

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
// MyBands.data = 'Van Halen' // will throw the error bc not array
// MyBands.data = ['van halen', 5150] // also bad
