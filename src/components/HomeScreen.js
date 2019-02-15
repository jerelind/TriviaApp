import React from 'react'
import {Container, Button} from 'semantic-ui-react'
import Title from '../components/Title'
import InfoScreen from '../components/InfoScreen'
import Togglable from '../components/Togglable'

const HomeScreen = ({newQuestion}) => {
    return(
        <Container>
            <Title/>
            <div style={homeScreenAlign}>
                <p id="welcome">Welcome to Trivialz.</p>
                <Togglable buttonLabel="Score system">
                    <InfoScreen />
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

const tableStyle = {
    width: "50%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
}


export default HomeScreen