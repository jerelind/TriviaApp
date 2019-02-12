import React from 'react'
import {Container, Button, Icon} from 'semantic-ui-react'
import Notification from '../components/Notification'

const QuestionScreen = ({question, reset, categoryName, questionOptions, answerRight, checkAnswer, scoreRight, scoreWrong, previousCorrectAnswer}) => {

  //shuffle questionOptions
  for (let i = questionOptions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = questionOptions[i]
    questionOptions[i] = questionOptions[j]
    questionOptions[j] = temp
  }

  return(
      <Container style={alignCenter}>
      <div>
      {answerRight === true ? <Notification notification={<Icon size="huge" color="green" name="check"/>}/> : null}
      {answerRight === false ? <Notification notification={<Icon size="huge" color="red" name="remove"/>} text={`Correct answer was ${previousCorrectAnswer}`}/> : null}
      </div>
      <div id="questionScreen">
        <div>{categoryName}</div>
        <h1 id="questionHeader">{question}</h1>
        {questionOptions.map(option => <div key={option} id="answerButtons"><Button id="answerButton" size="large" color="brown" value={option} onClick={checkAnswer}>{option}</Button></div>)}<br/>
        <div id="backToHomepage">
        <Button color="blue" size="medium" onClick={reset}>Back to homepage</Button>
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
