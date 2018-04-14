interface Data2
{
    readonly x : number;
    y : string;
    z? : boolean
}
let f19 = (data : Data2) =>
    {
        console.log("from f18:" + data.x + ","+ data.y +","+ data.z);
       data.y = "400";
       //data.x=34;
        console.log("from f18:" + data.x + ","+ data.y +","+ data.z);
    }
f19({x : 10, y:'abc', z: true});
f19({x:10, y:'abc'});