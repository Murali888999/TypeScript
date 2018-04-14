class Data3
{
    x : number;
    y : string;
    z : boolean
}
let f20 = (data : Data3) =>
    {
        console.log("from f18:" + data.x + ","+ data.y +","+ data.z);
        data.x = 400;
        console.log("from f18:" + data.x + ","+ data.y +","+ data.z);
    }
f20({x : 10, y:'abc', z: true});
f20({x:10, y:'abc', z: false});