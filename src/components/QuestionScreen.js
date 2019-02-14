import React from 'react'
import {Container, Button, Icon} from 'semantic-ui-react'
import Notification from '../components/Notification'

const QuestionScreen = ({
  question, 
  reset, 
  categoryName, 
  questionOptions, 
  answerRight, 
  checkAnswer, 
  scoreRight, 
  scoreWrong, 
  previousCorrectAnswer
}) => {

  return(
      <Container style={alignCenter}>
      <div>
      {answerRight === true ? <Notification notification={<Icon size="big" color="green" name="check"/>}/> : null}
      {answerRight === false ? <Notification notification={<Icon size="big" color="red" name="remove"/>} text={`Correct answer was "${previousCorrectAnswer}"`}/> : null}
      </div>
      <div id="questionScreen">
        <div>{categoryName}</div>
        <h1 id="questionHeader">{question}</h1>
        <div id="answerButtons">
        {questionOptions.map(option => <Button key={option} id="answerButton" color="brown" value={option} onClick={checkAnswer}>{option}</Button>)}
        </div>
        <div id="backToHomepage">
        <Button color="blue" size="medium" onClick={reset}>Reset</Button>
        <h2 id="score">Right answers: {scoreRight}</h2>
        <h2 id="scoreWrong">Wrong answers: {scoreWrong}</h2>
        </div>
      </div>
      </Container>
    )
}

const alignCenter = {
    textAlign: "center"
}

export default QuestionScreen
