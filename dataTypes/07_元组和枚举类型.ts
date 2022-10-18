//13 元组
let ton:[string, number, boolean] = ['Ton', 19, true]
let howLong:number = ton[0].length
console.log(howLong)
//对于未声明的 类型 新增元素 会作为已经声明的联合类型
ton.push()//只能放入字符串 数字 布尔类型
//14枚举类型 
enum days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log('days.Thu',days['Thu'])
//可以自定义， 但是重复定义后
enum Days {Sun = 3, Mon = 2, Tue, Wed, Thu, Fri, Sat}
console.log('days.Tue',Days['Tue'])

//计算所得项
enum trafficLighnt { Red = 'red', Green = 'green', Yellow = 'yellow' } 
console.log(trafficLighnt.Green)
