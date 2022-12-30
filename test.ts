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
    // gender: 'male',
}
interface objArray {
    [index:number]:Person
}
let Students:objArray = [{id: 2, name: 'Xu', age: 21, status: 'worker'},{id: 3, name: 'Tong', age: 21, status: 'worker'},{id: 4, name: 'Tom', age: 21, status: 'worker'}]

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

function reverse(x:number = 100):number{
    let result:number = Number(x.toString().split('').join(''))
    console.log('result', result);
    return result
}
