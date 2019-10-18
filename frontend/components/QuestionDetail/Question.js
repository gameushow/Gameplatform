import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../QuestionDetail/Countdown'
import io from 'socket.io-client'
import {getTeamList} from '../../service/team_member'
const socket = io.connect("http://localhost:5000")

const getTeamListResponse = {
  "success": true,
  "code": 200,
  "data": [
      {
          "id": 1,
          "game_id": 1,
          "name": "hHeLHnk5",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 2,
          "game_id": 1,
          "name": "rf70rwHA",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 3,
          "game_id": 1,
          "name": "u7tam0s5",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 4,
          "game_id": 1,
          "name": "UiREl5Qv",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 5,
          "game_id": 1,
          "name": "fTDlbpck",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 6,
          "game_id": 1,
          "name": "5bHblck7",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 7,
          "game_id": 1,
          "name": "Sqk1dXCl",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 8,
          "game_id": 1,
          "name": "yNAq1aAR",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 9,
          "game_id": 1,
          "name": "eKyNplhC",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      },
      {
          "id": 10,
          "game_id": 1,
          "name": "b3A4FI3q",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      }
  ]
};

const getQuestionResponse = {
  "success": true,
  "code": 200,
  "data": {
      "id": 1,
      "game_id": 1,
      "question": "VburqcE7nlaEJujJ",
      "score": 96,
      "time": 140,
      "created_at": "2019-10-12 10:34:35",
      "updated_at": "2019-10-12 10:34:35",
      "deleted_at": null,
      "category": {
          "id": 1,
          "name": "dMQbl2xv",
          "created_at": "2019-10-12 10:34:35",
          "updated_at": "2019-10-12 10:34:35",
          "deleted_at": null
      }
  }
};

const Content = styled.div`
  background-color:transparent;
  position: fixed;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:1000;
  width:600px;
  margin-left:1%;
  height:300px;
  align-items:center;
  text-align:center;
  font-size:${fonts.Small};
  color:white;
`

const Detail = styled.div`
  font-size:${fonts.Small};
  position: fixed;
  top:7.5%;
  left: 65%;
  color: black;
  font-family: Pixel;
  line-height: 20px;
  text-align: center;
  z-index:1000;
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

export default class Question extends Component {
  state = { hide: false, 
    minute: 999, secound: 999 , 
    startGame: 0, selectedTeam: {id:0} , 
    score: 0, question: {
      "id":0,
      "score":0,
      "question":"Wait for socket",
      "category": {
        "id": 0,
        "name": "Wait"
    }
    }}

  onTimeOut = () => {
    this.setState({ hide: true });
  };

  handleClickTimer = (event) => {
    event.preventDefault()
    socket.emit('boardCastTimeForTimer', 100000);
  };

  handleClickStartGame = (event) => {
    event.preventDefault()
    socket.emit('boardCastStartGame', 1);
  };

  handleClickSendScore = (event) => {
    event.preventDefault()
    socket.emit('boardCastScore', 500 );
  };

  handleClickRandomTeam = (event) => {
    event.preventDefault()
    const question = getTeamListResponse['data'];
    socket.emit('boardCastRandomTeam', teams);
  };

  handleClickSendQuestion = (event) => {
    event.preventDefault()
    const question = getQuestionResponse['data'];
    socket.emit('boardCastSendQuestion', question);
  };

  componentWillUnmount(){
    socket.close();
  }


  render() {
    socket.on("boardCastRandomTeam", data => {
      const randomTeam = Math.floor(Math.random()*data.length) + 1;
      const team = data[randomTeam];
      this.setState({ selectedTeam: team});
    });
    
    socket.on("boardCastStartGame", data => {
      const dataStart = data[0].start;
      this.setState({ startGame: 1});
    });
    
    socket.on("boardCastScore", data => {
      this.setState({ score: data});
    });

    socket.on("boardCastSendQuestion", data => {
      this.setState({ question: data});
    });
    return (
      <Content className="row">
        <div className="col-12 align-self-center">
          <Detail>
            Topic:{this.state.question.category.name}<br />
            Score:{this.state.question.score}
          </Detail>
          <Countdown socket={socket} onTimeOut={this.onTimeOut} minute={this.state.minute} secound={this.state.secound} /><br />
          <button onClick={this.handleClickTimer}>Send Timer</button>
          <button onClick={this.handleClickStartGame}>Send Start Game</button><br />
          <button onClick={this.handleClickRandomTeam}>Send Random Team</button>
          <button onClick={this.handleClickSendScore}>Send Score Team</button>
          <button onClick={this.handleClickSendQuestion}>Send Question</button>
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

