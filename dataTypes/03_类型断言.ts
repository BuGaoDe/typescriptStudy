//类型断言有两种表示方法 
// <> 
//as 更推荐  <>容易和 react 的 jsx 语法冲突
let someString: any = 'this is a string'
let strLength: number = (<string>someString).length

let someValue: any = 'this is a string too'
let valueLength: number = (someValue as string).length
console.log('strLength:', strLength,'valueLength:',valueLength)
//类型断言的四种用法：
//1、将联合类型断言为其中一个
interface Cat {
  name: string
  run():void
}
interface Fish {
  name: string
  swim():void
}
let Jery:Fish = {
  name:'jery',
  swim(){
    console.log('swimming')
  }
}
function isFish( animal: Cat | Fish) {
  if(typeof (animal as Fish).swim() == 'undefined') {
    console.log('it`s fish')
  } else {
    console.log('it`s cat')
  }
}
isFish(Jery)
//将一个父类断言为更加具体的子类
//将任何一个类型断言为 any
//将 any 断言为一个具体的类型
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

const tom = getCacheData('tom') as Cat;
tom.run();
// 若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
//同理，若 B 兼容 A，那么 A 能够被断言为 B，B 也能被断言为 A。
//双重断言 非必要不要用
//断言只是在编译前有用 编译后的结果并不受影响 所以 不能和类型转换替换
//断言 和 声明
//声明比断言更严格
//两个变量时，断言只需要两个兼容即可 但声明却需要两个都必须相同
