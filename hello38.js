var I = /** @class */ (function () {
    function I(x, y) {
        this.x = x;
        this.y = y;
        //nothing
    }
    I.prototype.test = function () {
        console.log("from test:" + this.x + "," + this.y);
    };
    return I;
}());
var refI = new I(10, 20);
refI.test();
//console.log(refI.x);
console.log(refI.y);
