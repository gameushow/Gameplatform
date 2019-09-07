import React, { Component } from 'react'
import styled from 'styled-components'
import Topic from '../ShowSign/Topic'
import './Light.css';
import Spacing from '../HomePage/Spacing'

const Btn = styled.button`
    font-size: 2em;
    width: 6em;
    height: 2.5em;
    background-color:#C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px
    rgba(0, 0, 0, 0.25), 0px 4px 4px 
    rgba(0, 0, 0, 0.25), 0px 4px 4px
    rgba(0, 0, 0, 0.25);
    z-index: 2;
    `
const BgGroupLine = styled.img`
    width: 6em;
    height: 57vmax;
    z-index: -1;
    position:absolute;
    margin-left:-3em;
    padding-top:8.5em;
    `

export default class ButtonSign extends Component {
    render() {
        return (
            <div>
                <BgGroupLine src="/static/img/groupline.png"></BgGroupLine>
                <Spacing />
                <Topic />
                <Spacing />
                <Spacing />
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


