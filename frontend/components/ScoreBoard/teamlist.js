import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import {getScore} from '../../service/score'

const Th = styled.th`
  text-align:center;
  font-size:${fonts.Small};
  line-height: 46px;
  color: #FFFFFF;
  border-bottom: 1px solid #ddd;
  padding-top:6px;
  ${props => props.team && `
    text-align:left;
    padding-left:5vw;
  `}
  color: ${props => props.color}  
`


export default class Teamlist extends Component {
  constructor(props) {
        super(props)
        this.state = {
            currentRandomTeam: {name:"-"},
            "success": true,
            "code": 200,
            team :[],
        }
    }

  async componentDidMount(){
        let scoreData = await getScore();
        console.log(scoreData)   
        if(scoreData.code == 200){
            this.setState({
                team: scoreData.data,
            });
        } 
    }

    renderTableData() {
      return this.state.team.sort((a, b) => a.score - b.score).map((team,num) =>
        <tr>
          <Th>{num+1}</Th>
          <Th team>{team.team_name}</Th>
          <Th>{team.score}</Th>
        </tr>
      );
    }

  render () {
    return (
      <>
        {this.renderTableData()}
      </>
    )
  }
}



