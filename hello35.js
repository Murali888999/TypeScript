var F = /** @class */ (function () {
    function F() {
        console.log("from constructor");
    }
    return F;
}());
var refF1 = new F();
console.log("----------");
var refF2 = new F();
console.log("----------");
var refF3 = refF1;
