var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log("from A");
    };
    return A;
}());
var refA = new A();
refA.test();
