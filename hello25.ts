interface Data
{
    x : number;
    y : string;
    z : boolean;
}
let ff = (data : Data) =>
    {
        console.log("from ff:" +data.x + ","+data.y+","+data.z);        
    }
ff({x : 10,y:'abc', z:true});