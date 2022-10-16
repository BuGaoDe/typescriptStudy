//所有数据类型都是小写
// 1 boolean
var isDone:boolean = false;

//new返回的是对象，直接返回是类型（符合逻辑）
var creatBoolean = new Boolean(1); //object
creatBoolean = Boolean(1); //boolan
console.log(typeof creatBoolean);

//2 number

let hexNumber:number = 0x39f;
let binaryNumber:number = 0b101011;
let octalNumber:number = 0o733;

//编译过后都会变成十进制

//3 string
let myName:string = 'Ton';
let myAge:number = 19;
let sentence:string = `My name is ${myName}, I\`m ${myAge} years old. `;
console.log(sentence);

//***4 void****
let unsable:void;
//void类型只能赋值undefined 

//可以给一个没有返回值的函数用 返回值可以返回null 和 undefined
function whoAmI():void{
  alert(sentence);
  return null
}


//undefined 和 null 是任何变量的子集 都可以赋值

let unkonw:undefined
let variableNull:null = null

isDone = unkonw

console.log(isDone)

/*any有三个要点：
1、any类型可以赋值任意类型
2、any类型可以访问任意方法
3、定义后未声明的变量 都是any类型
*/
let whatIsU;

//这不就是JavaScript吗？😅

//any和类型推断：
/* 声明一个变量之后 不进行赋值 随后无论怎样都是 any  */
/* 而声明一个变量 不进行类型固定 就会根据赋值内容进行推断 类型 */
whatIsU = 123;
console.log(typeof whatIsU)