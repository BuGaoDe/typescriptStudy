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
console.log('person is',ton);
console.log('students is',Students);
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

function fullname( firstname:string = "N    ame:",  lastname:string, endName?:string){
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

console.log('fullName', fullname(undefined,'li'))	//li
console.log('fullName', fullname('li','xiao'))	//xiaoli
console.log('fullName', fullname('li','xiao','ming'))	//mingxiaoli

function reverse(x:number):number{
    return Number(x.toString().split('').join(''))
}