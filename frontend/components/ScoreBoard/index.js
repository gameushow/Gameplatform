import React, { Component } from 'react'
import styled from 'styled-components'
import Background from './Background'

const Title = styled.h1`
color : white;
text-align:center;
font-size:72px;


`

export default class componentName extends Component {
  render() {
    return (
      <Background>
          
          <Title>SCOREBOARD</Title>
        
      </Background>
    )
  }
}
