// 11 类型断言
// 11.1 联合类型可以被断言为其中一个类型
interface Dog {
  name:string
  run():void
}
interface Fish {
  name:string
  swim():void
}
function isFish(animal: Dog | Fish ) {
  if(typeof (animal as Fish).swim === 'function') {
    return true
  } else {
  return false
  }
}
//如果不加as animal的值会为cat或者fish 因此会报错
//使用as会将这个类型确定为fish 且 if 判断也会保证程序不会出错

// 父类可以被断言为子类
// 任何类型都可以被断言为 any
//11.3 any 可以被断言为任何类型
//下面是别人的烂代码，返回的是any类型
function getCacheData(key: string): any {
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
let tom:Cat = {
  name:'tom',
  run():void{
    console.log('runing')
  }
}
tom = getCacheData('tom') as Cat