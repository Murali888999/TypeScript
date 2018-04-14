var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.test = function (msg) {
        console.log("from B:" + msg);
    };
    return B;
}());
var refB = new B();
refB.test("hello");
