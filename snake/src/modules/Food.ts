class Food{
    element:HTMLElement;
    constructor(){
        this.element=document.getElementById('food')!
    }
    get x(){
       return this.element.offsetLeft
    }
    get y(){
        return this.element.offsetTop
    }
    //food的位置随机改变
    change(){
        let top=Math.round(Math.random()*29)*10
        let left=Math.round(Math.random()*29)*10
        this.element.style.top=top+'px'
        this.element.style.left=left+'px'
    }
}

//测试代码
// const food=new Food()
// food.change()
// console.log(food.x,food.y)


export default Food