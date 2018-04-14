var greeting1 = /** @class */ (function () {
    function greeting1() {
    }
    greeting1.prototype.test = function () {
        console.log("hello");
    };
    return greeting1;
}());
var obj = new greeting1();
obj.test();
