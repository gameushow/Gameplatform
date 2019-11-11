import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../QuestionDetail/Countdown'
import socketService from '../../service/socket'

const getTeamListResponse = {
  "success": true,
  "code": 200,
  "data": []
}; 

const Content = styled.div`
  background-color:transparent;
  position: fixed;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index:1000; */
  width:600px;
  margin-left:1%;
  height:300px;
  align-items:center;
  text-align:center;
  font-size:${fonts.Small};
  color:white;
  font-family: 'Chakra Petch', sans-serif;
  font-weight:400;
`

const Detail = styled.div`
  font-size:36px;
  position: fixed;
  bottom:100%;
  left: 83%;
  color: black;
  font-family: 'Staatliches', cursive;
  line-height: 20px;
  text-align: center;
  /* z-index:1000; */
  ${props => props.time && `
    top:10%
    left:48%
  `}
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
const socketInstant = socketService.getSocketInstant();
export default class Question extends Component {
  state = { hide: false, 
    minute: 999, 
    secound: 999 , 
    startGame: 0, 
    selectedTeam: {id:0} , 
    score: 0, 
    question: {
      "id":0,
      "score":0,
      "question":"Wait for socket",
      "category": {
        "id": 0,
        "name": "Wait"
    }
    }}; 

  onTimeOut = () => {
    this.setState({ hide: true });
  };

  componentDidMount(){
    socketInstant.on("boardCastSendQuestion", data => {
      this.setState(state=>{
        return{
          question: data,
        }
      })
    });
  }


  render() {

    return (
      <Content className="row">
        <div className="col-12 align-self-center">
          <Detail>
            Score:{this.state.question.score}
          </Detail>
          <Countdown socketInstant={socketInstant} onTimeOut={this.onTimeOut}/><br />
        </div>
        <div className="col-12 align-self-center">
          <TimeUp {...this.state}>
            Time up
          </TimeUp>
          <Questions {...this.state}>
            {this.state.question.question}
          </Questions>
        </div>
      </Content>
    )
  }
}

