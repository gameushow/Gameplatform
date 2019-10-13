import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../QuestionDetail/Countdown'
import io from 'socket.io-client'


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
  font-size:${fonts.Small};
  color:white;
`

const Detail = styled.div`
  font-size:${fonts.Small};
  position: absolute;
  left: 90.5%;
  right: 13.12%;
  color: black;
  font-family: Pixel;
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

  state = { hide: false, minute: 999, secound: 999, socket:io.connect("http://localhost:5000")};
  
  onTimeOut = () => {
    this.setState({ hide: true});
  };

  handleClick = (event) => {
    event.preventDefault()
    this.state.socket.emit('boardCastTimeForTimer',7200);
  };

  render () {
    this.state.socket.on("boardCastTimeForTimer", data => {
      this.setState({minute: Math.floor(data/60)})
      this.setState({secound: (data%60)})
      console.log(this.state.minute);
      console.log(this.state.secound);
    });
    return (
      <Content className="row">         
            <div className="col-12 align-self-center">
              <Detail>
                Topic:<br/>
                Score:
              </Detail>
              <Countdown onTimeOut={this.onTimeOut} minute={this.state.minute} secound={this.state.secound} />
              <button onClick={this.handleClick}></button>
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

