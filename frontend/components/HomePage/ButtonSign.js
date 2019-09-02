import React, { Component } from 'react'
import styled from 'styled-components'
import Spacing from './Spacing';

const Btn = styled.button`
font-size: 2em;
width: 5em;
`


export default class ButtonSign extends Component {
    render() {
        return (
            <div>
                <Btn>500</Btn>
                <Spacing />
                <Btn>400</Btn>
                <Spacing />
                <Btn>300</Btn>
                <Spacing />
                <Btn>200</Btn>
                <Spacing />
                <Btn>100</Btn>
                <Spacing />
            </div>

        )
    }
}
