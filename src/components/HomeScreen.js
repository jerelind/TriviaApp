import React from 'react'
import {Container, Button} from 'semantic-ui-react'
import Title from '../components/Title'
import Togglable from '../components/Togglable'

const HomeScreen = ({newQuestion}) => {
    return(
        <Container>
            <Title/>
            <div style={homeScreenAlign}>
                <p id="welcome">Welcome to play a trivia game.</p>
                <Togglable buttonLabel="Show instructions">
                <p>The game will generate a random question for you when you press <i style={playTextStyle}>Play</i>.</p>
                <p>You will be shown four (4) alternatives to choose from.</p>
                <p>If you answer right ten (10) times, you will win.</p>
                <p>If you answer wrong ten (10) times, the game will be over.</p>
                </Togglable>
                <div>
                <Button style={genQButtonStyle} size="massive" color="green" onClick={newQuestion}>Play</Button>
                </div>
            </div>
        </Container>
      )
}

const homeScreenAlign = {
    textAlign: 'center',
    marginTop: '30px'
}

const genQButtonStyle = {
    boxShadow: "1px 1px black",
    textAlign: "center",
    fontFamily: "Anton"
}

const playTextStyle = {
    color: "green"
}


export default HomeScreen