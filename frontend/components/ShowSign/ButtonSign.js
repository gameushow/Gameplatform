import React, { Component } from "react";
import styled from "styled-components";
import TopicBox from "./TopicBox";
import Spacing from "../HomePage/Spacing";
import AllQuiz from "./AllQuiz";
import color from "../../config/color";
import {getQuestion,getQuestionById} from '../../service/questions';
import { request } from "http";
import socketService from '../../service/socket'

const socket = socketService.getSocketInstant();

const Btn = styled.button`
  font-size: 2em;
  width: 6em;
  height: 2.5em;
  background-color: ${color.QuestionScore};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  ::before {
    content: "";
    background: linear-gradient(45deg, #ffbf35, #fff);
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    background-size: 400%;
    z-index: -1;
    filter: brightness(50px);
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    animation: glowing 9s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  :active {
    color: #000;
  }
  :hover:before {
    opacity: 1;
  }
  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #c4c4c4;
    left: 0;
    top: 0;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  @media (min-width: 768px) {
    width: 4.3em;
    height: 2em;
  }
  @media (min-width: 1024px) {
    width: 5em;
    height: 2.5em;
  }
  @media (min-width: 1200px) {
    width: 5.7em;
    height: 2.5em;
  }
  @media (min-width: 1600px)  { 
    width: 6em;
    height: 3em;
  }
  @media (min-width: 1920px)  { 
    width: 6.5em;
    height: 3.2em;
  }
`
const BgGroupLine = styled.div`
  background-image: url("/static/img/groupline.png");
  background-repeat: no-repeat;
  background-position: top center;
  padding-top:2.7em;
`
const Hidden = styled.div` 
  text-align:center;
`


export default class ButtonSign extends Component {
  state = {
    data:[
  ],
  };
  

  async componentDidMount() {
    let question = await getQuestion();
    console.log(question)
    if (question.code <= 200) {
      this.setState({ data: question.data });
    }
    
  }
  onClick = id => {
    //let datatemp =  getQuestionById();
    let question;
    this.state.data.forEach(element => {
      if(id == element.id){
        question = element;
        console.log(question)
      }
    });
    /*if(datatemp == id){
      
    }*/
    socket.emit("boardCastSendQuestion",question);
  }
  render() {
    return (
      <Hidden className="container">
        <div className="row">
          {this.state.data.map((data, key) => (
            <div className={"col-md-" + 12 / AllQuiz.length } key={key}>
              <Spacing />
              <TopicBox>{data.category.name}</TopicBox>
              <BgGroupLine>
                <div>
                  {this.state.data.map((inside, i) => (
                    <div key={i}>
                      <Btn onClick={() =>{this.onClick(key+1)}}>{inside.score}</Btn>
                      <Spacing />                  
                    </div>
                  ))}
                </div>
              </BgGroupLine>
            </div>
          ))}        
        </div>
      </Hidden>
    );
  }
}
