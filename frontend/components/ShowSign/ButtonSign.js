import * as R from 'ramda'
import React, { Component } from "react";
import styled from "styled-components";
import Spacing from "../HomePage/Spacing";
import color from "../../config/color";
import { getQuestion, getQuestionById } from '../../service/questions';
import { getCategory } from '../../service/category'
import socketService from '../../service/socket'
import { Link } from 'react-scroll';


const socket = socketService.getSocketInstant();

const Btn = styled.button`
font-family: 'Staatliches', cursive;
  font-size: 36px;
  width: 6em;
  height: 2.5em;
  background-color: ${prop => prop.color};
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
    background: ${prop => prop.color};
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
  font-size:56px;
  font-family: 'Chakra Petch', sans-serif;
  font-weight:600;

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
    data: [],
    score: [],
    clicksign: [],
  };


  async componentDidMount() {
    let question = await getQuestion();
    let category = await getCategory();
    console.log(question)
    console.log("cat", category)
    if (category.code <= 200 && question.code <= 200) {
      this.setState({ data: category.data });
      this.setState({ score: question.data });
      console.log("sc", question.data);
    }

  }
  onClick = (question) => {
    console.log("q", question)
    let singClicked = this.state.clicksign
    singClicked.push({ 'id': question.id })
    this.setState({ clicksign: singClicked })

    socket.emit("boardCastSendQuestion", question);
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
                  {this.state.score.map((inside, i) => {
                    if (inside.category.id == data.id) {
                      const isClicked = R.find(R.propEq('id', inside.id))(this.state.clicksign) ? true : false
                      return (
                        <div key={i}>
                          <Link
                            activeClass="active"
                            to={this.props.to}
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={1000}>
                            <Btn disabled={isClicked} color={isClicked ? '#272727' : color.QuestionScore} onClick={() => { this.onClick(inside) }}>{inside.score}</Btn>
                          </Link>
                          <Spacing />
                        </div>
                      )
                    }
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
