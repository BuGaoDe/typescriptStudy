#  typescript的基础类型



typescript是javsscript的超集  所以也有js的数据类型。

typescript 通过 ` 变量:类型` 的方式来 指定类型

通过 

##  1、JS的五种基本类型：

- Boolean
- number
- string
- null & undefined

typescript有特定的类型 

1. any：any可以代表任意类型，

   ​	ts会对未声明是变量会进行推断

   ```typescript
   let demo
   demo = 'hello'
   demo = 3
   ```

   ​	这样是不会报错的。

2. void

   ​	在非严格模式下 null 和 undefined 可以赋值给void类型 

## 2、TS的引用类型

###  2.1数组

数组通过 `变量名:类型[]` 的方式来指定 

##  3、联合类型

ts中通过使用 `|` 来联合多种类型 

```typescript
let aNumber:number|string;
aNumber = 7;
aNumber = '7';
```

但联合类型只能访问共有的方法

```typescript
function doSomething(something:string|null){
    console.log(`do ${something}`)
}		
```

