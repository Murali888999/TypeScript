function test() {
    for (var i = 1; i <= 5; i++) {
        console.log("loop body:" + i);
    }
    console.log("from outside body:" + i);
}
test();
