import React, { Component } from 'react'
import styled from 'styled-components'
import color from '../../config/color'

const Bg = styled.div`
  background-color:${color.Background};
  min-height: 100vh;
`

const BgLine = styled.img`
  position:absolute;
  height:100%;
  width:100%;
`
const ThreeLine = styled.img`
  position:absolute;
  height:100%;
  transform: translate(380%,0%);
`
const ThreeLineRotate = styled.img`
  position:absolute;
  transform: translate(0%,380%);
  width:100%;
  height:10%;
`

export default class Background extends Component {
  render () {
    return (
      <Bg>
        <ThreeLine src = '/static/img/threeline.png' />
        <ThreeLineRotate src = '/static/img/threeline_rotate.png' />
        <BgLine src = '/static/img/bgline_score.png' />
      </Bg>
    )
  }
}



