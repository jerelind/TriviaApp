import React from 'react'
import Notification from '../components/Notification'
import {Icon, Container} from 'semantic-ui-react'

const CorrectScreen = ({answerRight, previousCorrectAnswer, rightStreak}) => {
    let streakOn = null
    let massiveStreak = null

    if(rightStreak === 3) {
      streakOn = true
    } else {
      streakOn = false
    }

    if(rightStreak > 3) {
      massiveStreak = true
    } else {
      massiveStreak = false
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
                {massiveStreak === true ? <p>Unbelievable knowledge!</p> : null}
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