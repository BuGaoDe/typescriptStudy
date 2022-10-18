//类 对象 
//封装 继承 多态
// 接口
//存取器 
//修饰符号  
//      public static 
//      private 不允许被继承或者实例化
//      protected 只允许被继承
//      abstract 抽象类
//抽象类 
class Animal {
  public name;
  constructor(name) {
    this.name = name
  }
  sayHi(){
    return `My name is ${this.name}`
  }
}

let Tom = new Animal(123) 
console.log(Tom.sayHi())

class Cat extends Animal {
  constructor( name ){
    super(name) //调用父类super
    console.log(this.name)
  }
  sayHi(){
    return 'Meow,' + super.sayHi();
  }
}
let c = new Cat('tom')
console.log(c.sayHi())
//存取器
//静态方法 
class Animals {
  static num = 42
  constructor(name) {
    this.name = name
  }
  get name() {
    return 'Jack'
  }
  set name(value) {
    console.log("setter:"+value)
  }
  sayHi(){
    return `My name is ${this.name}`
  }
}

let as = new Animals('Kitty')


