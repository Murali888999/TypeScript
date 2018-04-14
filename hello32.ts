class C
{
    test(msg : string)
    {
        console.log("from C:" +msg.length);
        
    }
}
let refC = new C();
refC.test("hello");