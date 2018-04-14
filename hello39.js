var J = /** @class */ (function () {
    function J(x, y, z) {
        console.log("from constructor");
    }
    return J;
}());
var refJ1 = new J();
console.log("---------");
var refJ2 = new J(10);
console.log("---------");
var refJ3 = new J(22, 36);
console.log("---------");
var refJ4 = new J(33, 34, 56);
console.log("---------");
