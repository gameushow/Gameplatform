import React, { Component } from 'react'
import styled from 'styled-components'
import Topic from './Topic'
import './Light.css';
import Spacing from '../HomePage/Spacing'
import AllQuiz from './AllQuiz'


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
                <Topic/>
                <Spacing />
                {
                    AllQuiz.map((data,key) => (
                        <div>
                            <Spacing />
                            <Btn className = "glow-on-hover">{data.score}</Btn>
                        </div>
                    ))
                }
                <Spacing />
            </div>
        )
    }
}


