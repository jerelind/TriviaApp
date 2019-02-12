import React from 'react'
import {Container, Button, Icon} from 'semantic-ui-react'
import Notification from '../components/Notification'

const QuestionScreen = ({question, reset, categoryName, questionOptions, answerRight, checkAnswer, score}) => {

    return(
        <Container style={alignCenter}>
        <div>
        {answerRight === true ? <Notification notification={<Icon color="green" name="huge check"/>}/> : null}
        </div>
        <div id="questionScreen">
          <div>{categoryName}</div>
          <h1 id="questionHeader">{question}</h1>
          {questionOptions.map(option => <div key={option} id="answerButtons"><Button id="answerButton" size="big" color="brown" value={option} onClick={checkAnswer}>{option}</Button></div>)}<br/>
          <div id="backToHomepage">
          <Button color="blue" size="big" onClick={reset}>Back to homepage</Button>
          </div>
        </div>
        <div id="score">
            <h2>Right answers: {score}</h2>
        </div>
        </Container>
      )
}

const alignCenter = {
    textAlign: "center"
}

export default QuestionScreen
