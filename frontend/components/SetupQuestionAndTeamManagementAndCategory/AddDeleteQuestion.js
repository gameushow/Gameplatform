import React, { Component } from 'react'
import styled from 'styled-components'

const Addquestion = styled.button`
    border: none;
    width: 120px;
    height: 42px;
    background-color: #37AB00;
    color:#fff;
    font-size: 18px;
    line-height: 21px;
`
const Deletequestion = styled(Addquestion)`
    background: #FF4040;
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
                        <Addquestion type="button" data-toggle="modal" data-target="#Addquestion">
                            + ADD
                        </Addquestion>
                        <Deletequestion type="button" data-toggle="modal" data-target="#Deletequestion">
                            - DELETE
                        </Deletequestion>
                    </AddDeleteblock>
                </div>
            </div>
        )
    }
}
