let isDone: boolean = true;

let myAge: number = 25;

let myName: string = `gaollard`;

let list: number[] = [1, 2, 3];
let students: Array<number> = [1, 2, 3];

let tuple: [string, number];
tuple = ['name', 25];
// tuple[2] = 26;

// 枚举类型会被编译成为一个对象
enum Color {'red', 'blue', 'yellow'}
let c: Color = Color.red;
console.log(Color);

let inputs: any;
inputs = [];

let onNotSureData: Object = 3;

function notify (): void {
  console.log(111);
}

let stdNum: number;
// stdNum = null;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

let someValue: any = 'hello wolrd';
let someLength: number = (<string>someValue).length;

let otherValue: any = 'this is a new world';
let otherLength: number = (otherValue as string).length;

