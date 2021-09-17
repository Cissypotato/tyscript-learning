import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

class GameControl {
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;
    direction:string='';
    isLive=true

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    //初始化游戏，表示游戏开始
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }
    //按键方法
    // ArrowDown
    // ArrowRight
    // ArrowUp
    // ArrowLeft
    keydownHandler(event: KeyboardEvent){
        console.log(event.key)
        this.direction=event.key
        
    }

    run(){


        let X=this.snake.X
        let Y=this.snake.Y
        switch(this.direction){
            case"ArrowDown":
            case"Down":
            Y+=10
            break
            case"ArrowRight":
            case"Right":
            X+=10
            break
            case"ArrowUp":
            case"Up":
            Y-=10
            break
            case"ArrowLeft":
            case"Left":
            X-=10 
            break
        }
        this.snake.X=X
        this.snake.Y=Y

        // setTimeout(this.run.bind(this),300)
        if(this.isLive){
            setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
        }
    }

}

export default GameControl