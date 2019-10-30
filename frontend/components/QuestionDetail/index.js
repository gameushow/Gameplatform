import React, { Component } from 'react'
import styled from 'styled-components'
import Background from '../QuestionDetail/Background'
import color from '../../config/color'
import font from '../../config/fonts'
import Question from '../QuestionDetail/Question'


const Bg = styled.div`
  background-color:${color.Background};
  min-height: 100vh;
`
const Mornitor = styled.img`
  width:65%;
  display: block;
  transform: translate(0%,7%);

  @media (min-width:1920px) {
    width:93%;
  }
  @media (min-width:2100px) {
    transform: translate(0%,12%);
  }
  @media (min-width:2300px) {
    transform: translate(0%,12%);
  }
  @media (min-width:2400px) {
    transform: translate(0%,10%);
  }
`

export default class componentName extends Component { 
  render() {
    return (
      <Bg>
        <Background/>
        <Question/>
        <div class ="container">
          <div class ="row justify-content-center">
            <Mornitor src ='/static/img/mornitor2.png'></Mornitor>
          </div>
        </div>
      </Bg>
    )
  }
}
