import React, { Component } from 'react'
import styled from 'styled-components'


const BgLine = styled.img`
position:absolute;
z-index:0;
height:100%;
width:100%;
  @media (min-width:1200px) {
    
  }


`
const ThreeLine = styled.img`
position:absolute;
z-index : 0;
height:100%;
transform: translate(380%,0%);
@media (min-width:1200px) {
    
  }
`
const ThreeLineRotate = styled.img`
position:absolute;
z-index:0;
transform: translate(0%,380%);
width:100%;
height:10%;
@media (min-width:1200px) {
    
  }

`

export default class ComponentName extends Component {
  render () {
    return (
      <div>
        <ThreeLine src = '/static/img/threeline.png' />
        <ThreeLineRotate src = '/static/img/threeline_rotate.png' />
        <BgLine src = '/static/img/bgline_score.png' />
      </div>
    )
  }
}



