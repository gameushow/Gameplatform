import React, { Component } from 'react'
import styled from 'styled-components'
import Spacing from '../HomePage/Spacing';
import './Light.css';

const Btn = styled.button`
    font-size: 2em;
    width: 5em;
    background-color:#C4C4C4;
    border:none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px
    rgba(0, 0, 0, 0.25), 0px 4px 4px 
    rgba(0, 0, 0, 0.25), 0px 4px 4px
    rgba(0, 0, 0, 0.25);

    `


export default class ButtonSign extends Component {
    render() {
        return (
            <div>               
                <Btn className="glow-on-hover">500</Btn>         
                <Spacing />
                <Btn className="glow-on-hover">400</Btn>
                <Spacing />
                <Btn className="glow-on-hover">300</Btn>
                <Spacing />
                <Btn className="glow-on-hover">200</Btn>
                <Spacing />
                <Btn className="glow-on-hover">100</Btn>
                <Spacing />
            </div>

        )
    }
}
