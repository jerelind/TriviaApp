import React from 'react'
import {Table} from 'semantic-ui-react'

const InfoScreen = () => {
    return(
        <div>
            <Table inverted celled style={tableStyle}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell><strong>Easy Question</strong></Table.Cell>
                    <Table.Cell>Right: +1</Table.Cell>
                    <Table.Cell>Wrong: -2</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><strong>Medium Question</strong></Table.Cell>
                    <Table.Cell>Right: +3</Table.Cell>
                    <Table.Cell>Wrong: -1</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><strong>Hard Question</strong></Table.Cell>
                    <Table.Cell>Right: +5</Table.Cell>
                    <Table.Cell>Wrong: 0</Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
        </div>
    )
}

const tableStyle = {
    width: "50%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5px"
}

export default InfoScreen