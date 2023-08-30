//一旦将变量类型指定为any，ts就会关闭这个变量的类型检查，即便发生语法错误也不会进行提示
let someA: any;
someA = 9;
someA = [0, "9"];
someA = "hello";
someA.foo = 9;

//any的类型推断
//1.let和var在声明变量时未指定类型，就会被推断为any（const必须有初始化的值，且值不能改变）
//2.未指定类型的函数参数
var b;
let a;
function add(a, b) {
  return a + b;
}
add("nihao", 8);

//any的坏处
//1.污染其它变量。由于any可以赋予任意类型的值，相当于所有类型的集合，属于top type，所以可以any类型的变量可以赋值给其它任意类型
let someB;
someB = 9;
let bee: boolean = false;
bee = someB;
let obj = { name: "jack" };
obj = someB;

/**unkown**/
//虽然和any一样可以赋予任意类型值，但是有语法检查了
let unA: unknown;
unA = 9;
unA = [0, "9"];
unA = "hello";
// unA.foo = 9;//报错

//不能赋值给其它变量
let unB: unknown;
unB = 9;
let va1: boolean = false;
// va1=unB //报错
let obj1 = { name: "jack" };
// obj1=unB //报错

//不能直接调用unkown类型变量的方法和属性
let unC: unknown = {
  name: "unC",
  sayHello() {
    alert("hi");
  },
};
// let nameC=unC.name //报错
// unC.sayHello()//报错


let unD:unknown='sandy'
//unD.length//直接使用报错
if( typeof unD==="string"){
    unD.length
}