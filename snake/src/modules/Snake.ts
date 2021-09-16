


class Snake{

    head:HTMLElement;
    bodies:HTMLCollection;
    element:HTMLElement;
    constructor(){
        this.head=document.querySelector("#snake>div")!
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div')
        this.element=document.querySelector("#snake")!
    }

    //获取坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    //设置位置
    set X(value){
        this.head.style.left=value+"px"
    }
    set Y(value){
        this.head.style.top=value+"px"
    }
    addBody(){
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
}

export default Snake