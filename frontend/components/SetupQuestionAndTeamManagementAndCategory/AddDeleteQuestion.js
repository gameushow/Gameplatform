import React, { Component } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Addquestion = styled(Button)`
    border: none;
    width: 120px;
    height: 42px;
    font-size: 18px;
    line-height: 21px;
    margin-right:10px;
`

const Deletequestion = styled(Addquestion)`
    margin-right:0px;
`

const AddDeleteblock = styled.div`
    padding-top:0.3em;
`

export default class AddDeleteQuestion extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <AddDeleteblock className="ml-auto">
                        <Addquestion variant="success" onClick={() => this.props.onClick()}>
                            + ADD
                        </Addquestion>
                        <Deletequestion variant="danger" onClick={() => this.props.onDelete()}>
                            - DELETE
                        </Deletequestion>
                    </AddDeleteblock>
                </div>
            </div>
        )
    }
}
