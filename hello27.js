var f19 = function (data) {
    console.log("from f18:" + data.x + "," + data.y + "," + data.z);
    // data.x = 400;
    console.log("from f18:" + data.x + "," + data.y + "," + data.z);
};
f19({ x: 10, y: 'abc', z: true });
f19({ x: 10, y: 'abc' });
