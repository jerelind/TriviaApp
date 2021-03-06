import React from 'react'
import {Container, Button, Icon} from 'semantic-ui-react'
import Togglable from '../components/Togglable'

const EndScreen = ({reset, endText, scoreRight, scoreWrong, iconColor, iconName, score}) => {
    return(
    <Container style={alignCenter}>
        <Icon size="huge" color={iconColor} name={iconName}/>
        <div id="questionHeader">
        {endText}
        </div>
        <Button color="green" size="massive" style={genQButtonStyle} onClick={reset}>Play again</Button>
        <Togglable buttonLabel="Show score">
        <div id="scoreTable">
            <p>You got <i>{score}</i> points!</p>
            <p>Right answers: {scoreRight}</p>
            <p>Wrong answers: {scoreWrong}</p>
        </div>
        </Togglable>
    </Container>
    )
}

export default EndScreen

const alignCenter = {
    textAlign: "center",
    padding: "30px"
}

const genQButtonStyle = {
    margin: "20px",
    boxShadow: "1px 1px black",
    textAlign: "center",
    fontFamily: "Anton"
}