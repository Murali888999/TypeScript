class Data4
{
    x : number;
    y ?: string;
    readonly z : boolean
}
let f21 = (data : Data4) =>
    {
        console.log("from f18:" + data.x + ","+ data.y +","+ data.z);
      //  data.z = 400;
        console.log("from f18:" + data.x + ","+ data.y +","+ data.z);
    }
f21({x : 10, y:'abc', z: true});
f21({x:10, z: false});