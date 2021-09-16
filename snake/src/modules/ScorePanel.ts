class ScorePanel{
    score=0;
    level=1;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    
    //最高等级
    maxLevel:number;
    //设置多少分升一级
    upScore:number;


    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
        this.maxLevel=maxLevel
        this.upScore=upScore
    }

    addScore(){
        this.scoreEle.innerHTML=++this.score+''
        if(this.score%this.upScore===0){
            this.addLevel()
        }
       
    }

    addLevel(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level + ''
        }
       
    }
}

let scorePanel=new ScorePanel()

//测试代码
// scorePanel.addScore()
// scorePanel.addLevel()
// scorePanel.addScore()
// scorePanel.addScore()
// for(let i=0;i<10;i++){
//     scorePanel.addScore()
// }


export default ScorePanel