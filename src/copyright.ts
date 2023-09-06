// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// First variation of fixes with just ts
// let year: HTMLElement | null = <HTMLElement | null>document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear
// }

// fix with assertions
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
