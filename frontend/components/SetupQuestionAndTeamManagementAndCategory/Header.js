import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    text-align:center;
    padding-top:0.5em;
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
