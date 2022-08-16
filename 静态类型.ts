//静态类型 定义后就不可以再改变
interface woman {
    name: string,
    age:number,
}

type man = {
    name: string,
    age: number,
} 

let Merry:woman = {
    name: 'Cherry',
    age: 18
}

//基础静态类型
//JS的相同类型 : boolean number string symbol null undifined 
//array tuple 枚举  never void any 
//前几种类型与JS差别并不大,主要是后面的
//null
let isNumber:number = 66
let isString:string = 'string'

let isNull: null = null

//对象类型 数组类型 类类型 函数类型