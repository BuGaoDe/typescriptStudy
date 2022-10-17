//10 函数类型
//函数有输入和输出 因此需要把两者都考虑到
//函数的两种声明方式 声明和表达式
function sum(x:number, y:number): number {
  return x+y
}
console.log(sum(1,3))

let add = function(x:number, y:number):number {
  return x + y
}
add(1,3)
//但第二种时通过类型赋值进行推断的，并不能很好的约束，最好这样
// let mySum:(x:number, y:number) => number = function(x:number, y:number):number {
//   return x + y
// }
//可选参数和默认值
//可  选参数后面不可以加其他类型的参数 
function change(x:number, y:string = 'number',z?:any ){
  console.log(`${x} is ${y}`)
}
change(1)
//剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
//函数也可以通过接口来定义类型
//函数的重载
//重载是传入不同的参数会有不同的输出
//直接用  function reverse(x: number | string): number | string { ... }的方法也可以解决
//但是输出的类型是被固定的
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse('yes')
//同理，多个参数时，精确定义的需要放到前面 


