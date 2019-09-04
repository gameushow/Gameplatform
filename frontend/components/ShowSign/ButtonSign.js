import React, { Component } from 'react'
import styled from 'styled-components'
import Spacing from '../HomePage/Spacing';


const Btn = styled.button`
    font-size: 2em;
    width: 5em;
    background-color:#C4C4C4;
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
