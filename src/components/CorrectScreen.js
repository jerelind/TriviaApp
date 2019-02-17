import React from 'react'
import Notification from '../components/Notification'
import {Icon, Container} from 'semantic-ui-react'

const CorrectScreen = ({answerRight, previousCorrectAnswer, rightStreak, difficulty}) => {
    let streakOn = null
    let points = null

    if(rightStreak >= 3) {
      streakOn = true
    } else {
      streakOn = false
    }

    if(difficulty === "easy" && answerRight) {
        points = 1
    } else if(difficulty === "medium" && answerRight) {
        points = 2
    } else if(difficulty === "hard" && answerRight) {
        points = 3
    }

    return(
        <Container style={alignCenter}>
        <div>
            <div>
                {answerRight === true ? 
                <Notification 
                    notification={<Icon size="massive" color="green" name="check"/>} 
                    text={`You got it right!`}/> : null}
                {answerRight === false ? 
                <Notification 
                    notification={<Icon size="massive" color="red" name="remove"/>} 
                    text={`Correct answer was "${previousCorrectAnswer}"`}/> : null}
            </div>
            <div>
                {streakOn === true ? <p>You're on fire!</p> : null}
                <p>You got {points} points!</p>
            </div>
        </div>
        </Container>
    )
}

const alignCenter = {
    textAlign: "center",
    padding: "50px"
}

export default CorrectScreen