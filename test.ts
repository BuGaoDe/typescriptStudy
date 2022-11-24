var demo:void
demo = null;
demo = undefined;
console.log(demo);
function doSomething(something:string|void){
    console.log(`do ${something}`)
};
let isNull:null = null

doSomething(isNull);  