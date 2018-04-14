var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.test = function (msg) {
        console.log("from C:" + msg.length);
    };
    return C;
}());
var refC = new C();
refC.test("hello");
