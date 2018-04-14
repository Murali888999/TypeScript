class D
{
    test(msg : string) : number
    {
        console.log("from B:" +msg);
        return msg.length;
        
    }
}
let refD = new D();
console.log(refD.test("hello"));