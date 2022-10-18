//12 使用字符串字面变量来约束取值范围
type EventName = 'click' | 'scroll' | 'mousemove';
//Element 是个内置对象
function handleEvent( ele: Element, event: EventName){
  console.log(`${ele} + ${event}`)
}
handleEvent(document.getElementById('hello'), 'scroll')//规定了第二个事件的字符串
