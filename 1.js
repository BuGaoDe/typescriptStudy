"use strict";
console.log(sum(13, '56')); //1356
//元素赋值以后不能再更改类型（强类型）
let num = 100;
num = 200;
//num 不能再赋值其他类型
//此时 a 和 b 可以传递任何值， 因为没有指定
function notsum(a, b) {
    return a + b;
}
//指定元素类型，此时return 也是被指定的
function sum(a, b) {
    return a + b;
}
//也可以更改最终返回值的结果，但是需要真正的返回值一致
function realsum(a, b) {
    return `结果时${a + b}`;
}
//ts会自动推断内容，当出现响应数据类型时，再push就不会出错
let array = ['123', 456, true];
array.push(true);
//ts 指定类型后就不可以更改数据的具体类型
//但是可以推断具体的类型 数组，对象可以推断内部具体的数据类型 
//而不指定数据类型的对象就无法赋值
let obj2 = [];
console.log(obj2 instanceof Object); //Object
//ts 的数据类型和 js 差不多 
//boolean number 字符串 
//字符串一样可以 用 模板字符串 `${}`
//array一样是引用类型
//元组 Tuple
//元组类似于数组，可以装任何类型的数据 
let tub;
tub = ['123', 456];
console.log(tub[0]);
console.log(typeof tub);
//枚举类型 可以定义自己的数据类型
//any类型 为一个不确定的数据类型指定 类型
let anyway = 123;
console.log(typeof anyway);
//void类型 
//void类型可以赋值 undefined 和 null
//这两个值赋值个任何值
//never表示永远不存在的值 never可以赋值为任意值
//但任何值都不可以赋值给never， 除了never本身
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let arr = [1, '1', {obj: 'obj'}]
console.log(arr)