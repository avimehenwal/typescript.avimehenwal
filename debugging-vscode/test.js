var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        var count = 5;
        for (var i = 1; i < 7; i++) {
            var element = 7[i];
            document.write(i.toString() + '<br>');
        }
        console.log('all Done');
    };
    return SimpleCounter;
}());
var count = new SimpleCounter;
count.count();
//# sourceMappingURL=test.js.map