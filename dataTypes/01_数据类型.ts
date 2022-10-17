//所有数据类型都是小写
// 1 boolean
var isDone:boolean = false 

//new返回的是对象，直接返回是类型（符合逻辑）
var creatBoolean = new Boolean(1)  //object
creatBoolean = Boolean(1)  //boolan
console.log(typeof creatBoolean) 

//2 number

let hexNumber:number = 0x39f 
let binaryNumber:number = 0b101011 
let octalNumber:number = 0o733 

//编译过后都会变成十进制

//3 string
let myName:string = 'Ton' 
let myAge:number = 19 
let sentence:string = `My name is ${myName}, I\`m ${myAge} years old. ` 
console.log(sentence) 

//***4 void****
let unsable:void 
//void类型只能赋值undefined 

//可以给一个没有返回值的函数用 返回值可以返回null 和 undefined
function whoAmI():void{
  alert(sentence) 
  return null
}


//5 undefined 和 null 是任何变量的子集 都可以赋值

let unkonw:undefined 
let variableNull:null = null 

isDone = unkonw 

console.log(isDone) 

/* 6 any有三个要点：
1、any类型可以赋值任意类型
2、any类型可以访问任意方法
3、定义后未声明的变量 都是any类型
*/
let whatIsU 

//这不就是JavaScript吗？😅

//any和类型推断：
/* 声明一个变量之后 不进行赋值 随后无论赋值何种类型的变量，其变量都是 any  */
/* 而声明一个变量 不进行类型固定 就会根据赋值内容进行推断 类型 */
whatIsU = 123 
console.log(typeof whatIsU)   //any

// 7 联合类型
//表示取值可以是多种类型的一种
let myfavoirteNumbers: number | number[] | null 
myfavoirteNumbers = null
//函数中指定传入参数的多种类型 只能访问指定类型的公用方法
function getLength(somthing: string | number[]): number{
  return somthing.length;
}
//类型被赋值后，就会推断出对应的方法
myfavoirteNumbers = [6, 4]
console.log(myfavoirteNumbers.length)

//8 对象的类型
// 接口 
//接口可以定义对象的具体类型 ，一般接口首字母大写（构造函数？？）
interface Person {
  name: string
  age: number
} 
let Ton:Person = {
  id: 1,
  name: 'Ton',
  age: 19,
  salary: 7200
}
//定义接口后 tom的属性的类型 数量 结构 都必须要和接口一致 多写少写都会报错
//也可以使用可选属性 来控制
interface Person{
  salary?: number
}

let YI:Person = {
  id: 2,
  name:'yi',
  age: 19,
  salary: 5500
}
//接口是可以随时新增的 且不能修改之前的值 （应该和编译有关）  
console.log(YI)
console.log(Ton)
//新增任意属性
interface Person {
  [propName: string]: any
}
//任意属性的类型 不能和之前定义的类型冲突， 所有变量必须是子集可以随意增加变量个数
let who:Person = {
  id:3,
  name:'who',
  age: 100,
  salary: 7200,
  other:'unknow',
  country: 'unknow',
}
//只读属性 , 在第一次给对象赋值时就会被限制 
interface Person {
  readonly id: number
}
// 9 数组类型
//使用 类型名 + 方括号 的方式定义类型 数组中 不可以出现除了定义的类型名之外的类型
let arr: string[] = ['1', '2', '3']
arr.push('5')
//同理 arr 的方法也会收到限制，只能接收对应的参数
//例如 arr.push(5) //报错
//数组也可以用接口来定义