import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Background from './Background'

const Title = styled.h1`
color : white;
text-align:center;
font-size:8vw;
`

const Table = styled.div`
  background: #302B2D;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2vh;
  margin-top: 3vh;
  display: table;
`

const Th = styled.th`
  text-align:center;
  font-family: Pixel;
  font-size: 2vw;
  line-height: 3vw;
  color: #FFFFFF;
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
            <tr>
              <Th>1</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>2</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>3</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>4</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>5</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>6</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>7</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>8</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
            <tr>
              <Th>9</Th>
              <Th team>Berglunds snabbkop</Th>
              <Th>500</Th>
            </tr>
          </table>
        </Table>


      </Background>
    )
  }
}
