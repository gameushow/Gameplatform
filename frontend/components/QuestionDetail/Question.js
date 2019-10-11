import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../QuestionDetail/Countdown'

const Content = styled.div`
  background-color:transparent;
  position: fixed;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:1000;
  width:600px;
  margin-left:1%;
  height:400px;
  align-items:center;
  text-align:center;
  font-size:30px;
  color:white;
`

const Detail = styled.div`
  position: absolute;
  left: 90.5%;
  right: 13.12%;
  color: black;
  font-family: Pixel;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
`

const Questions = styled.div`
  ${({ hide }) => hide && `
    display: none;
  `}
`

const TimeUp = styled.div`
  display: none;
  ${({ hide }) => hide && `
    display: block;
  `}
`

export default class Question extends Component {

  state = { hide: false};

  onTimeOut = () => {
    this.setState({ hide: true});
  };

  render () {
    return (
      <Content className="row">         
            <div className="col-12 align-self-center">
              <Detail>
                Topic:<br/>
                Score:
              </Detail>
              <Countdown onTimeOut={this.onTimeOut} />
            </div>
            <div className="col-12 align-self-center">
              <TimeUp {...this.state}>
                  aaaaa
              </TimeUp> 
              <Questions {...this.state}>
                  Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1
                  500s, when an unknown printer took a
                  galley of type and scrambled it to ma
                  ke a type specimen book. It has  
              </Questions>
            </div>               
        </Content>
    )
  }
}

