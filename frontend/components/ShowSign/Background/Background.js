import React, { Component } from 'react'
import styled from 'styled-components'

const BgLine = styled.img`
    z-index: -2;
    position:absolute;
    width:100%;
    padding-top:2.4em;
`

export default class Background extends Component {
    render() {
        return (
            <div>
                <BgLine src="/static/img/bgline.png"></BgLine>
            </div>
        )
    }
}