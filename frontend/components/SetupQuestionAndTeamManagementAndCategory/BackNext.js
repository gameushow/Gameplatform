import React, { Component } from 'react'
import styled from 'styled-components'

const BackNextButton = styled.button`
    width: 180px;
    height: 70px;
    background: #C4C4C4;
    border-radius: 50px;
    border: none;
`
const Font = styled.div`
    font-size: 36px;
    text-align: center;
    padding-bottom:8px;
    line-height: 56px;
`
const BoxBackNext = styled.div`
    padding-top:9px;
`
const BoxBack = styled.div`
    padding-left:50px;
`
const BoxNext = styled.div`
    padding-right:50px;
`
export default class BackNext extends Component {
    render() {
        return (
            <BoxBackNext className="container">
                <div className="row justify-content-between">
                    <BoxBack classname="col-auto mr-auto">
                        <a href={this.props.pathback}><BackNextButton>
                            <Font>Back</Font>
                        </BackNextButton></a>
                    </BoxBack>
                    <BoxNext className="col-auto">
                        <a href={this.props.pathnext}><BackNextButton onClick={() => this.props.onClick()} >
                            <Font>Next</Font>
                        </BackNextButton></a>
                    </BoxNext>
                </div>
            </BoxBackNext>
        )
    }
}
