import React, { Component } from "react";
import styled from "styled-components";
import Spacing from "../HomePage/Spacing";
import color from "../../config/color";
import {getQuestion,getQuestionById} from '../../service/questions';
import {getCategory} from '../../service/category'
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
const ButtonDiv = styled.div`
  background-color: ${color.Topic};
  border-radius:1em;
  @media (min-width: 768px) {
    margin-top:0.4em;
  }

  @media (min-width: 1024px)  { 
    margin-top:0.8em;
  }
`
const InsideButton = styled.div`
  padding:0.5em;
  color:#FFFFFF;
  text-align: center;
  font-size:2.5em;

  @media (min-width: 768px) {
      padding:0.5em;
      font-size:2.1em;
  }

  @media (min-width: 1024px)  { 
      padding:0.6em;
      font-size:2.3em;
  }

  @media (min-width: 1200px)  { 
      padding:0.7em;
      font-size:2.4em;
  }
  @media (min-width: 1600px)  { 
      padding:0.7em;
      font-size:3em;
    }
`

export default class ButtonSign extends Component {
  state = {
    data:[],
    score:[]
  };
  

  async componentDidMount() {
    let question = await getQuestion();
    let category = await getCategory();
    console.log(question)
    console.log("cat",category)
    if (category.code <= 200&&question.code<=200) {
      this.setState({ data: category.data });
      this.setState({score:question.data});
    }
    
  }
  onClick = (catId,id) => {
    let question;
    for(let i=0;i<this.state.data.length;i++){
      if(catId == this.state.score[i].category.id){
        for(let i=0;i<=id;i++){
          if(id == i){
            question = this.state.score[i];
            console.log(question)
          }
        }
        
      }
    }
    socket.emit("boardCastSendQuestion",question);
  }
  render() {
    return (
      <Hidden className="container-fluid">
        <div className="row">
          {this.state.data.map((data, key) => (
            <div className="col" key={key}>
              <Spacing />
              <ButtonDiv><InsideButton>{data.name}</InsideButton></ButtonDiv>
              <BgGroupLine>
                <div>
                  {this.state.score.map((inside, i) => 
                  {if(inside.category.id==data.id)
                  { return (
                    <div key={i}>                       
                      <a href="/admin/questiondetail"><Btn onClick={() =>{this.onClick(this.state.data[key].id,i)}}>{inside.score}</Btn></a>
                      <Spacing />                  
                    </div>
                  )}
                  return
                  })}
                </div>
              </BgGroupLine>
            </div>
          ))}        
        </div>
      </Hidden>
    );
  }
}
