import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../QuestionDetail/Countdown'
import socketService from '../../service/socket'
// import { Column, Row } from "simple-flexbox";

const getTeamListResponse = {
  "success": true,
  "code": 200,
  "data": []
};
const Mornitor = styled.div`
  width:70%;
  background-image:url("/static/img/mornitor2.png");
  background-size:cover;
  height:100vh;
  transform: translate(0%,10%);

  @media (min-width:1920px) {
    margin-top:2px;
    width:100%;
  }
  @media (min-width:2100px) {
    transform: translate(0%,10%);
  }
  @media (min-width:2300px) {
    transform: translate(0%,9%);
  } 
`
const Content = styled.div`
  background-color:transparent;
  position: fixed;
  align-items:center;
  text-align:center;
  font-size:${fonts.Small};
  color:white;
  font-family: 'Chakra Petch', sans-serif;
  font-weight:400;
`

const Detail = styled.div`
  font-size:24px;
  position: fixed; 
  color: black;
  font-family: 'Staatliches', cursive;
  line-height: 20px;
  text-align: center;
  margin-top:50px;
  ${props => props.time && `
    top:10%
    left:48%
  `}
  @media (min-width:1920px) {
    margin-top:80px;
    margin-left:25px;
  }
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
const TextEdit = styled.div`
  overflow:hidden;
  overflow-wrap: break-word;
`

const socketInstant = socketService.getSocketInstant();
export default class Question extends Component {
  state = {
    hide: false,
    minute: 999,
    secound: 999,
    startGame: 0,
    selectedTeam: { id: 0 },
    score: 0,
    question: {
      "id": 0,
      "score": 0,
      "question": "Wait for socket",
      "category": {
        "id": 0,
        "name": "Wait"
      }
    }
  };

  onTimeOut = () => {
    this.setState({ hide: true });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    console.log("scroll")
  };

  componentDidMount() {
    socketInstant.on("boardCastSendQuestion", data => {
      this.setState(state => {
        return {
          question: data,
        }
      })
    });
  }

  render() {
    return (
      <Mornitor>
        <Content className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col-6">
              <Countdown socketInstant={socketInstant} onTimeOut={this.onTimeOut} /><br />
            </div>
            <div className="col-3">
              <Detail>
                Score:{this.state.question.score}
              </Detail>
            </div>
          </div>
          <div className="row">
            <div className="col-12 align-self-center">
              <TimeUp {...this.state}>
                Time up
          </TimeUp>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
            </div>

            <TextEdit className="col-10"  >
              <Questions {...this.state}>
                {this.state.question.question}
              </Questions>
              </TextEdit>

            <div className="col-1">
            </div>
          </div>
        </Content>
      </Mornitor>
    )
  }
}

