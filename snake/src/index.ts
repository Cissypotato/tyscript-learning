
import './index.less'

import Food  from './modules/Food'
import ScorePanel from './modules/ScorePanel'


const food=new Food()
food.change()
console.log(food.x,food.y)

//测试代码
let scorePanel=new ScorePanel()
scorePanel.addScore()
scorePanel.addLevel()
scorePanel.addScore()
scorePanel.addScore()
