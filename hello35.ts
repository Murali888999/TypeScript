class F  
{
    constructor()
    {
        console.log("from constructor");
    }
}
let refF1 = new F();
console.log("----------");
let refF2 = new F();
console.log("----------");
let refF3 = refF1;