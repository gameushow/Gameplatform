import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Background from './Background'
import teamList from './teamlist'

const Title = styled.h1`
color : white;
text-align:center;
font-size:6vw;
padding-top:2vw;
`

const Table = styled.div`
  background: #302B2D;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2vh;
  overflow: hidden;
  height:33vw;
  padding-left:6vw;
`

const Th = styled.th`
  font-family: Pixel;
  font-size: 1.5vw;
  ${props => props.team && css`
    text-align:left;
    padding-right:15vw;
    padding-left:10vw;
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
        <Table className="container col-7" >
          <table>
            <tr>
              <Th color="#FF0000" >Rank</Th>
              <Th color="#FFBF35" team>Team</Th>
              <Th color="#4695BE" >Score</Th>
            </tr>
            {teamList}
          </table>
        </Table>      
</Background>
    )
  }
}
