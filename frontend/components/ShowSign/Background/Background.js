import React, { Component } from 'react'
import styled from 'styled-components'

const BgLine = styled.img`
    width:100%;
    z-index: -2;
    position:absolute;
    padding-top:13em;
    height:100%;
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
