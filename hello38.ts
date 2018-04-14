class I 
{
    constructor(private x : number, public y : number)
    {
        //nothing
    }
    test()
    {
        console.log("from test:"+ this.x +"," + this.y);
    }
}
let refI = new I(10, 20);
refI.test();
//console.log(refI.x);
console.log(refI.y);