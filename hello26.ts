interface Data1
{
    x : number;
    y ?: string;
    z : boolean;
}
let f18 = (data : Data1) =>
    {
        console.log("from f18:" + data.x + ","+data.y +","+data.z);
        data.x =400;
        console.log("from f18:" + data.x + ","+data.y +","+data.z);
    }
f18({x : 10, y:'abc', z: true});
f18({x:10, z:false});