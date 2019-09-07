import React, { Component } from 'react'
import styled from 'styled-components'


const BgLine = styled.img`
position:absolute;
z-index:0;
height:100%;
width:100%;
`
const ThreeLine = styled.img`
position:absolute;
z-index : 0;
height:100%;
transform: translate(380%,0%);
`
// const ThreeLineRotate = styled.img`
// position:absolute;
// z-index:0;
// width:100;

// `

export default class ComponentName extends Component {
  render () {
    return (
      <div>
        <ThreeLine src = '/static/img/threeline.png' />
        {/* <ThreeLineRotate src = '/static/img/threeline_rotate.png' /> */}
        <BgLine src = '/static/img/bgline_score.png' />
      </div>
    )
  }
}



