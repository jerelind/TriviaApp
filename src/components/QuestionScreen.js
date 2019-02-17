import React from 'react'
import {Container, Button} from 'semantic-ui-react'

const QuestionScreen = ({
  question, 
  reset, 
  categoryName, 
  questionOptions, 
  checkAnswer, 
  difficulty,
  score,
  rightStreak
}) => {

  let streakOn = null

  if(rightStreak >= 3) {
    streakOn = true
  } else {
    streakOn = false
  }

  return(
      <Container style={alignCenter}>
      <div id="questionScreen">
        <div style={difficultyStyle}><p>Difficulty: {difficulty}</p></div>
        <div><p>{categoryName}</p></div>
        <h1 id="questionHeader">{question}</h1>
        <div id="answerButtons">
        {questionOptions.map(option => <Button key={option} id="answerButton" color="brown" value={option} onClick={checkAnswer}>{option}</Button>)}
        </div>
        <div id="backToHomepage">
        <Button color="blue" size="medium" onClick={reset}>Reset</Button>
        <h2 id="score">{score} points</h2>
        </div>
      </div>
      </Container>
    )
}

const alignCenter = {
  textAlign: "center"
}

const difficultyStyle = {
  marginBottom: "5px"
}

export default QuestionScreen
