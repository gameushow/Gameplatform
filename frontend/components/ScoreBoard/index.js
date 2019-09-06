import React, { Component } from 'react'
import styled from 'styled-components'
import Background from './Background'
import teamList from './teamlist'

const Title = styled.h1`
  color : white;
  text-align:center;
  font-size:6vw;
  padding-top:2vw;
`

const Board = styled.div`
  background: #302B2D;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2vh;
  overflow: hidden;
  height:33vw;
`

const Th = styled.th`
  font-family: Pixel;
  font-size: 1.5vw;
  ${props => props.team &&`
    text-align:left;
    padding-right:15vw;
    padding-left:5vw;
  `}
  color: ${props => props.color}  
`

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <Background >
        <Title >SCOREBOARD</Title>
        <div className="container">
          <div className="row justify-content-center">
            <Board className="col-8" >
              <table align="center">
                <tr>
                  <Th color="#FF0000" >Rank</Th>
                  <Th color="#FFBF35" team>Team</Th>
                  <Th color="#4695BE" >Score</Th>
                </tr>
                {teamList}
              </table>
            </Board>
          </div>
        </div>
      </Background>
    )
  }
}
