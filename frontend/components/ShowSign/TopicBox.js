import React, { Component } from 'react'
import styled from 'styled-components'
import AllQuiz from './AllQuiz'
import color from '../../config/color'

const ButtonDiv = styled.div`
  background-color: ${color.Topic};
  border-radius:1em;
`
const InsideButton = styled.div`
  padding:0.5em;
  color:#FFFFFF;
  text-align: center;
  font-size:2.5em;

  @media (min-width: 768px) {
      padding:0.5em;
      font-size:2.1em;
  }

  @media (min-width: 1024px)  { 
      padding:0.6em;
      font-size:2.3em;
  }

  @media (min-width: 1200px)  { 
      padding:0.7em;
      font-size:2.4em;
  }
`
export default class TopicBox extends Component {
  render() {
    return (
      <ButtonDiv>
        <InsideButton>
          {this.props.children}
        </InsideButton>
      </ButtonDiv>
    )
  }
}