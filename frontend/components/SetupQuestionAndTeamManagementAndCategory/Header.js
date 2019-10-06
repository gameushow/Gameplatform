import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    text-align:center;
    padding-top:0.1em;
    font-weight: bold;
    font-size: 64px;
`
export default class Header extends Component {
    render() {
        return (
            <Title>
                {this.props.name}
            </Title>
        )
    }
}
