import React, { Component } from 'react'
import styled from 'styled-components'
import Background from '../QuestionDetail/Background'
import color from '../../config/color'
import font from '../../config/fonts'


const Bg = styled.div`
  background-color:${color.Background};
  min-height: 100vh;
`


export default class componentName extends Component {
    

    
  render() {
    return (
      <Bg>
        <Background/>
      </Bg>
    )
  }
}
