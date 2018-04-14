var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());
var ff = function (data) {
    console.log("from ff:" + data.x + "," + data.y + "," + data.z);
};
ff({ x: 10, y: 'abc', z: true });
