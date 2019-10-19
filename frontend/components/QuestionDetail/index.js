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
  width:50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transform: translate(0%,3%);
  
  @media (min-width:2100px) {
    width:50%;
    transform: translate(0%,12%);
  }
  @media (min-width:2300px) {
    width:50%;
    transform: translate(0%,12%);
  }
  @media (min-width:2400px) {
    width:50%;
    transform: translate(0%,10%);
  }


  
  
`

export default class componentName extends Component {
    

    
  render() {
    return (
      <Bg>
        <Background/>
        <Question/>
        <Mornitor src ='static/img/mornitor2.png'></Mornitor>
      </Bg>
    )
  }
}
