

interface myInter{
    name:string;
    sayHello():void
}
interface myInter{
    age:number
}

let jack:myInter={
    name:'jack',
    age:18,
    sayHello(){
        console.log('hello')
    }
}

class Human implements myInter{
    name:string;
    age:number;
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayHello(){
        console.log('hi')
    }
}