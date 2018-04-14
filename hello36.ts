class G  
{
    constructor(x,y)
    {
        console.log("from constructor:" +x+", "+y);
    }
}
let refG1 = new G("abc", 20);
console.log("----------");
let refG2 = new G(30, 40);
console.log("----------");
let refG3 = refG1;