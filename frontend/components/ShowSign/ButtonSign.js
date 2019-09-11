import React, { Component } from 'react'
import styled from 'styled-components'
import Topic from './Topic'
import './Light.css';
import Spacing from '../HomePage/Spacing'
import AllQuiz from './AllQuiz'
const Btn = styled.button`
  font-size: 2em;
  width: 6em;
  height: 2.5em;
  background-color:#C4C4C4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px
  rgba(0, 0, 0, 0.25), 0px 4px 4px
  rgba(0, 0, 0, 0.25), 0px 4px 4px
  rgba(0, 0, 0, 0.25);
  z-index: 2;
`
const BgGroupLine = styled.img`
  width: 6em;
  max-height: 100vh;
  z-index: -1;
  position:absolute;
  margin-left:-3em;
  padding-top:6em;
`
export default class ButtonSign extends Component {
  
  render() {
    return (
      <div className = "row">
        {
          AllQuiz.map((data,key) => (
            <div className = {'col-' + 12/AllQuiz.length} key = {key}>
            <BgGroupLine src="/static/img/groupline.png"></BgGroupLine>
            <Spacing />
              <Topic>{data.name} </Topic>
              <Spacing />
              <div>
                <Spacing />
                  {
                    data.score.map((inside , i) => (
                      <div key = {i}>
                        <Btn className = "glow-on-hover">
                          {inside}
                        </Btn>
                        <Spacing />
                      </div>
                    ))
                  }
              </div>
            </div>
          ))
        }
        <Spacing />
      </div>
    )
  }
}

