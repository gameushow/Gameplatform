import React, { Component } from 'react'
import styled from 'styled-components'
import Background from './Background'
import teamList from './teamlist'
import color from '../../config/color'
import fonts from '../../config/fonts'

const Bg = styled.div`
  background-color:${color.Background};
  min-height: 100vh;
`

const Title = styled.h1`
  font-size:${fonts.Headline};
  color : white;
  text-align:center;
  padding-top:2vw;
`

const Board = styled.div`
  background: #302B2D;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  height:33em;
`

const Th = styled.th`
  font-size:${fonts.Small};
  ${props => props.team &&`
    text-align:left;
    padding-right:15vw;
    padding-left:5vw;
  `}
  color: ${props => props.color}  
`

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <Bg>
        <Background />
        <Title >SCOREBOARD</Title>
        <div className="container">
          <div className="row justify-content-center">
            <Board className="col-8" >
              <table align="center">
                <tbody>
                  <tr>
                    <Th color="#FF0000" >Rank</Th>
                    <Th color="#FFBF35" team>Team</Th>
                    <Th color="#4695BE" >Score</Th>
                  </tr>
                  {teamList}
                </tbody> 
              </table>
            </Board>
          </div>
        </div> 
      </Bg>
    )
  }
}
