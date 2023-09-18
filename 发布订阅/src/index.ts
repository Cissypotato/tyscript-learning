
interface Event1{
    on(name:string,fn:Function):void;
    emit(name:string,...args:Array<any>):void;
    off(name:string,fn:Function):void;
    once(name:string,fn:Function):void;
}
interface List{
    [key:string]:Array<Function>
}
class Dispatch implements Event1{
    list:List
    constructor(){
        this.list={}
    }
    on(name:string,fn:Function){
        const callback=this.list[name] || []
        callback.push(fn)
        this.list[name]=callback
    }
    emit(name:string,...args:Array<any>){
        const eventArr=this.list[name]
        if(eventArr){
            eventArr.forEach(fn=>{
                fn.apply(this,args)
            })
        }else{
            console.error(`error eventName.couldn't be found`)
        }
        
    }
    off(name:string,fn:Function){
        const eventArr=this.list[name]
        if(eventArr && fn){
            const index =eventArr.findIndex(fns=>fns===fn)
            eventArr.splice(index,1)

        }else{
            console.error(`error eventName.couldn't be found`)
        }
    }
    once(name:string,fn:Function){
        const tem =(...args:Array<any>)=>{
            fn.apply(this,args)
            this.off(name,fn)
        }   
        this.on(name,tem)
    }
}

const myD=new Dispatch()

myD.on('handledata',(...args:Array<any>)=>{
   console.log(111,args)
})
// const fn=(...args:Array<any>)=>{
//     console.log(222,args)
// }
// myD.on('handledata',fn)
// myD.off('handledata',fn)
myD.once('handledata',(...args:Array<any>)=>{
    console.log('once',args)
 })
myD.emit('handledata',1,false,{})

myD.emit('handledata',2,true)