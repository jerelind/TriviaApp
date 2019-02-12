import React from 'react'
import {Container, Button} from 'semantic-ui-react'

const EndScreen = ({reset, endText, scoreRight, scoreWrong}) => {
    return(
    <Container style={alignCenter}>
        <div id="questionHeader">
        {endText}
        </div>
        <Button color="blue" style={playAgainButton} onClick={reset}>Play again</Button>
        <div id="scoreTable">
            <p>Your score:</p>
            <p>Right answers: {scoreRight}</p>
            <p>Wrong answers: {scoreWrong}</p>
        </div>
    </Container>
    )
}

export default EndScreen

const alignCenter = {
    textAlign: "center",
    marginTop: "300px"
}

const playAgainButton = {
    marginTop: "20px"
}