var isDone = true;
var myAge = 25;
var myName = "gaollard";
var list = [1, 2, 3];
var students = [1, 2, 3];
var tuple;
tuple = ['name', 25];
// tuple[2] = 26;
// 枚举类型会被编译成为一个对象
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
var c = Color.red;
console.log(Color);
var inputs;
inputs = [];
var onNotSureData = 3;
function notify() {
    console.log(111);
}
var stdNum;
// stdNum = null;
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
var someValue = 'hello wolrd';
var someLength = someValue.length;
var otherValue = 'this is a new world';
var otherLength = otherValue.length;
