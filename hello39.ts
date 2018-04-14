class J
{
    constructor(x? : number, y? : number, z? : number)
    {
        console.log("from constructor");
    }
}
let refJ1 = new J();
console.log("---------");
let refJ2 = new J(10);
console.log("---------");
let refJ3 = new J(22,36);
console.log("---------");
let refJ4 = new J(33, 34, 56);
console.log("---------");