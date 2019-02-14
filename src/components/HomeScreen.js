import React from 'react'
import {Container, Button, Table} from 'semantic-ui-react'
import Title from '../components/Title'
import Togglable from '../components/Togglable'

const HomeScreen = ({newQuestion}) => {
    return(
        <Container>
            <Title/>
            <div style={homeScreenAlign}>
                <p id="welcome">Welcome to 10 question Trivialz.</p>
                <Togglable buttonLabel="Instructions">
                <p>Question difficulties & points</p>
                <Table inverted celled style={tableStyle}>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell><strong>Easy</strong></Table.Cell>
                        <Table.Cell>Right: +1</Table.Cell>
                        <Table.Cell>Wrong: -2</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><strong>Medium</strong></Table.Cell>
                        <Table.Cell>Right: +3</Table.Cell>
                        <Table.Cell>Wrong: -1</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><strong>Hard</strong></Table.Cell>
                        <Table.Cell>Right: +5</Table.Cell>
                        <Table.Cell>Wrong: 0</Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
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