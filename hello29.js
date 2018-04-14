var Data4 = /** @class */ (function () {
    function Data4() {
    }
    return Data4;
}());
var f21 = function (data) {
    console.log("from f18:" + data.x + "," + data.y + "," + data.z);
    //  data.z = 400;
    console.log("from f18:" + data.x + "," + data.y + "," + data.z);
};
f21({ x: 10, y: 'abc', z: true });
f21({ x: 10, z: false });
