import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

class GameControl{
    food:Food;
    snake:Snake;
    scorePanel:ScorePanel;

    constructor(){
        this.food=new Food()
        this.snake=new Snake()
        this.scorePanel=new ScorePanel()
        this.init()
    }

    //初始化游戏，表示游戏开始
    init(){}
    //
    
}

export default GameControl