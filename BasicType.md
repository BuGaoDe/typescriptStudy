#  typescript基础入门

> ​	本章节只有常见变量类型的约束，泛型类数组等再后面的章节

typescript是javsscript的超集  所以也有js的数据类型。

typescript 通过 ` 变量:类型` 的方式来 指定类型

安装typescript后 通过 **tsc指令** 编译ts文件为js文件 或 直接执行

```
tsc	-s
```

##  1、JS的五种基本类型：

- Boolean
- number
- string
- null & undefined

这些类型在ts和js中都是通用的

typescript有特定的类型 

1. any：any可以代表任意类型，

   ​	ts会对未声明是变量会进行推断,下例中 demo就被推断为any类型。

   ```typescript
   let demo
   demo = 'hello'
   demo = 3
   ```

   ​	这样是不会报错的。但不要将typescript用成anyscript

2. void

   在非严格模式下 null 和 undefined 可以赋值给void类型 

   ```typescript
   let testVoid:void;
   testVoid = null
   testVoid = undefined	
   ```

3. 联合类型

   ts中通过使用 `|` 来联合多种类型 

   ```typescript
   let aNumber:number|string;
   aNumber = 7;
   aNumber = '7';
   ```

   可以传两个类型的参数 （但都会console.log undefined😅）

   ```typescript
   function doSomething(something:string|null){
       console.log(`do ${something}`)
   }		
   ```

   ```typescript
   function doSomething(something:string|number){
       return something.toString()
       //return something.length() 报错 因为string没有length方法
   };
   ```


## 2、TS的引用类型

###  2.1对象

TS中使用 **接口(interface)** 来定义对象的类型

接口使用 **interface** 关键字定义

```typescript
interface Person {
	name:string;
	age:number;
}
let Ton:person = {
	name: 'Ton';
	age: 21;	
}
```

接口限制了对象的形状 多一个属性或者少一个属性都是**不可以的**，更不用说 属性的类型了。

当然，接口也提供一些其他的操作，方便进行对属性进行自定义操作

1. **可选属性**

   ```typescript
   interface Person {
   	name:string;
   	age:number;
   	status?:sting;
   }
   ```

   可选属性可以选择用也可以选择不用，但**不可添加其它未在接口中说明属性**。

2. **只读属性**

   ```typescript
   interface Person {
       readonly id:number;
       name:string;
       age:number;
       status?:string;
   }
   ```

   只读属性只能在第一次给对象**赋值时传入**，且**必须传入**，传入之后则不能再改变。

3. **任意属性**

   ```typescript
   interface Person {
       name:string;
       age:number;
       status?:string;
       [gender:string]:string|number;
   }
   ```

   任意属性是可选的，可传可不传；但定义了任意属性之后，可选属性和确定属性必须是**任意属性的子类型**，否则会报错。

   ` [属性名:该属性的类型]:任意属性的类型`

```typescript
interface Person {
    readonly id:number;
    name:string;
    age:number;
    status?:string;
    [gender:string]:string|number;
}
let ton:Person = {
    id:1,
    name:'Ton',
    age: 21,
    status: 'worker',
    gender: 'male',
}
console.log('person is',ton);	//person is { id: 1, name: 'Ton', age: 21, status: 'worker', gender: 'male' }
```

当然 接口的作用远不止于此 还可以**限制数组** 、**限制类**  这个后面再详细谈。

### 2.2数组

数组通过 `变量名:类型[]` 的方式来指定 ` let newArray:number=[1, 2, 3, 4, 5];`

数组的内容只能是类型或者子类型

也可以使用接口的方式来定义一个数组

```typescript
interface Person {
    readonly id:number;
    name:string;
    age:number;
    status?:string;
    [gender:string]:string|number;
}
interface objArray {
    [index:number]:Person
}
let Students:objArray = [{id: 2, name: 'Xu', age: 21, status: 'worker'},{id: 3, name: 'Tong', age: 21, status: 'worker'}]
```

objArray接口的意思是 当index为数字类型时，值的类型必须是Person接口的对象。

不过也可以看到 除非 **person** 或者 **objArray** 会在别处使用，否则都过于麻烦。

数组的**泛型**以及**类数组**的方式后面再讲，在此只需有个概念。

### 2.3函数

通常函数的入口和出口都需要对类型进行约束 `function(参数1:类型,参数2:类型...):返回值类型{}`

当确定参数之后 多输入参数或者少输入参数都是不可以的。

众所周知 JS有两种函数的表达方法，声明式和变量式。

```typescript
let toSum = function(a:number, b:number):number{
	return a+b;
}
//实际上会这样编译
let toSum(a:number, b:number) => number = function(a:number, b:number):number{
	return a+b;
}
```

此处的 `=>` 不同于ES6语法 只是用来表示 输入和输出

> 突然想到 精简版的箭头函数是不是这样` 形参:形参类型:函数输出类型 => return语句`

当然 函数也给了几种定制化的类型定义方法

1. **可选参数**

   可选参数类似于接口的可选参数

   ```typescript
   function fullName(lastname:string, firstname?:string, endName?:string){
       if(firstname){
           if(endName){
               return endName +firstname + lastname
           } else {
               return firstname + lastname
           }
       } else {
           return lastname
       }
   }
   console.log('fullName', fullName('li'))	//li
   console.log('fullName', fullName('li','xiao'))	//xiaoli
   console.log('fullName', fullName('li','xiao', 'ming'))	//mingxiaoli

2. **参数默认值**

   参数默认值的位置是随意的，甚至可以放在可选参数后，但不同位置所代表的逻辑是不一样的

   ```typescript
   function fullname( firstname:string = "Name:",  lastname:string, endName?:string){
       if(firstname){
           if(endName){
               return endName +firstname + lastname
           } else {
               return firstname + lastname
           }
       } else {
           return lastname
       }
   }
   
   console.log('fullName', fullname(undefined,'li'))	//fullName nameli
   console.log('fullName', fullname('li','xiao'))	//fullName lixiao
   console.log('fullName', fullname('li','xiao','ming'))	//fullName minglixiao
   ```

3. **剩余参数**

   同js中一样 ts 也可用 `...` 的语法来获取剩余参数 ， `...` 接收的是一个数组，所以可以用定义数组的方式去定义。

**重载**

ts中可以多次声明函数，实现重载（暂时没有好的例子）

