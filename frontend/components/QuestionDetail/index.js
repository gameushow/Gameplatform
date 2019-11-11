import React, { Component } from 'react'
import styled from 'styled-components'
import Background from '../QuestionDetail/Background'
import color from '../../config/color'
import font from '../../config/fonts'
import Question from '../QuestionDetail/Question'
import { Link } from "react-scroll";


const Bg = styled.div`
  background-color:${color.Background};
  min-height: 100vh;
`
export default class componentName extends Component { 
  render() {
    return (
      <Bg>
        <Background/>
        <Link 
                      activeClass="active"
                      to={this.props.to}
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration= {1000}>
        <div className ="container">
          <div className ="row justify-content-center">
            <Question/>
          </div>
        </div></Link>
      </Bg>
    )
  }
}
