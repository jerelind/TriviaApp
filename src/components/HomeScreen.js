import React from 'react'
import {Container, Button} from 'semantic-ui-react'
import Title from '../components/Title'
import Togglable from '../components/Togglable'

const HomeScreen = ({newQuestion}) => {
    return(
        <Container>
            <Title/>
            <div style={homeScreenAlign}>
                <p>Welcome to play a trivia game.</p>
                <Togglable buttonLabel="Show instructions">
                <p>The game will generate a random question for you when you press <i style={playTextStyle}>Play</i>.</p>
                <p>You will be shown four (4) alternatives to choose from.</p>
                <p>If you answer right ten (10) times, you will win.</p>
                <p>If you answer wrong five (5) times, the game will be over.</p>
                </Togglable>
                <br/>
                <div style={genQButtonStyle}>
                <Button size="massive" color="green" onClick={newQuestion}>Play Game</Button>
                </div>
            </div>
        </Container>
      )
}

const homeScreenAlign = {
    textAlign: 'center'
}

const genQButtonStyle = {
    textAlign: "center",
}

const playTextStyle = {
    color: "green"
}


export default HomeScreen