import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../QuestionDetail/Countdown'

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

  state = {
     hide: false,
      "success": true,
      "code": 200,
      "data": {
          "id": 1,
          "category_id": 2,
          "game_id": 1,
          "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has  ",
          "score": 74,
          "time": 10,
          "created_at": "2019-10-13 05:47:13",
          "updated_at": "2019-10-13 05:47:13",
          "deleted_at": null
      }
  };

  onTimeOut = () => {
    this.setState({ hide: true});
  };

  render () {
    return (
      <div>
        <div className="row">
          <Detail>
                Topic:{this.state.data.category_id}<br/>
                Score:{this.state.data.score}
          </Detail>
          <Detail time>
            <Countdown onTimeOut={this.onTimeOut} time={this.state.data.time}/>
          </Detail>
          
        </div>       
        <Content className="row">         
            <div className="col-md-12 align-self-center">
              <TimeUp {...this.state}>
                  Time Up!
              </TimeUp> 
              <Questions {...this.state}>
                  {this.state.data.question}
              </Questions>
            </div>               
        </Content>
      </div>
      
    )
  }
}

