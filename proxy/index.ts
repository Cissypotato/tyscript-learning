
const list:Set<Function>=new Set()

const autoRun=(cb:Function)=>{
    if(!list.has(cb)){
        list.add(cb)
    }
}

const observable=<T extends object>(params:T)=>{
    return new Proxy(params,{
        set(target,key,value,receiver){
            const result=Reflect.set(target,key,value,receiver)
            list.forEach(fn=>fn())
            return result
        }
    })
}

const personProxy=observable({name:'jack',age:18})

autoRun(()=>{
    console.log('something changed')
})

personProxy.name='rose'

personProxy.age=20