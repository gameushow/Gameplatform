import React, { Component } from 'react'
import styled from 'styled-components'
import color from '../../../config/color'

const BgLine = styled.img`
    width:100%;
    height:100%;
    padding-top:2em; 
`
const Bgcolor = styled.div`
    background-color:${color.Background};
    width:100%;
    height: 100%;
    max-height:100vh;
    position:fixed;
`

export default class Background extends Component {
    render() {
        return (
            <Bgcolor>
                <BgLine src="/static/img/bgline_half.png"/>
            </Bgcolor>
        )
    }
}
