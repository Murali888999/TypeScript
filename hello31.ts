class B
{
    test(msg)
    {
        console.log("from B:" +msg);
        
    }
}
let refB = new B();
refB.test("hello");