
console.log(sum(13, '56'));

//元素赋值以后不能再更改
let num = 100
//num 不能再赋值其他类型

//此时 a 和 b 可以传递任何值， 因为没有指定
function notsum (a, b){
    return a+b
}
//指定元素类型，此时return 也是被指定的
function sum (a: number, b:string) {
    return a+b
}
//也可以更改最终返回值的结果，但是需要真正的返回值一致
function realsum (a: number, b:number):string {
    return `结果时${a+b}`
}
//ts会自动推断内容，当出现响应数据类型时，再push就不会出错
let array = ['123', 456, true]
array.push(true)

//ts 指定类型后就不可以更改数据的具体类型
//但是可以推断具体的类型 数组，对象可以推断内部具体的数据类型 