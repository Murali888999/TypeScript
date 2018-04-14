var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.test = function (msg) {
        console.log("from B:" + msg);
        return msg.length;
    };
    return D;
}());
var refD = new D();
refD.test("hello");
