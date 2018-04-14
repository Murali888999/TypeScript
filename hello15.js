var f7 = function (msg) {
    console.log("from test1:" + msg);
    return msg.length;
};
var f5 = f7("hello");
console.log(f5);
var f6 = f7("12345");
console.log(f6);
