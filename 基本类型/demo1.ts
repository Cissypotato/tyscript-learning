let a:10
let b;
b=true
b=10
b=false
let c:unknown
c=9
c="dd"

let d:string
d=b
console.log(d)
// if(typeof c==="string"){
//     d=c
// }
d=c as string
d=<string>c
console.log(d)


function fn():void{
    console.log(5555)
}
function err():never{
    throw new Error("报错了");  
}


let obj:{}
let obj1:{ name:string}//obj1有且只有一个属性为name，且类型为string
obj1={name:'xiaoming'}
let obj2:{ name:string,age?:number}//obj2必须有name属性，age可选
obj2={name:'xiaohong'}
let obj3:{name:string,[otherAttr:string]:any}//obj3必须有name属性，其它任意多的属性可选，且类型不限。
obj3={name:"xiaolan",gender:'famale',age:18}
let obj4:{name:string,[otherAttr:string]:string}//obj4必须有name属性，其它任意多的属性可选，类型为string，如果类型不是string则name会报错。


// let arr1:string[]
let arr1:Array<string>
arr1=["1",'a']


let tr:[string,number]
tr=['string',18]

enum Gender{
    Male=1,
    Female=0
}

let user:{name:string,gender:Gender}
user={name:"xiaoming",gender:Gender.Male}
//还可以判断
if(user.gender===Gender.Male){}

//类型别名
type ctype=1|string
let type1:ctype
let type2:ctype
type1=1
type2="1"


