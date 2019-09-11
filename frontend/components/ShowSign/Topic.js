import React, { Component } from 'react'
import styled from 'styled-components'
import AllQuiz from './AllQuiz'
const ButtonDiv = styled.div`
  background-color:#1F3B63;
  border-radius:1em;
  z-index: 1;
`
const InsideButton = styled.div`
  padding:0.5em;
  color:#FFFFFF;
  text-align: center;
  font-size:2.5em;
`
export default class Topic extends Component {
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