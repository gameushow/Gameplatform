import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import {getScore} from '../../service/score'
import socketService from '../../service/socket'

const socket = socketService.getSocketInstant();

const Th = styled.th`
  text-align:center;
  font-size:36px;
  line-height: 46px;
  color: #FFFFFF;
  border-bottom: 1px solid #ddd;
  padding-top:6px;
  font-family: 'Chakra Petch', sans-serif;
  font-weight:500;
  ${props => props.team && `
    text-align:left;
    padding-left:5vw;
  `}
  color: ${props => props.color}  
  ${props => props.team && `
    text-align:left;
    padding-left:5vw;
  `}
`

const Tr = styled.tr`
  color: red;
`


export default class Teamlist extends Component {
  constructor(props) {
        super(props)
        this.state = {
            currentRandomTeam: {name:"-"},
            "success": true,
            "code": 200,
            team :[],
            randomTeam:[]
        }
    }

  async componentDidMount(){
        let scoreData = await getScore();
          
        if(scoreData.code == 200){
            this.setState({
                team: scoreData.data,
            });
        } 
        socket.on("boardCastRandomTeam",data => {
                 this.setState({
                    randomTeam : data
                  })
        }); 
    }

    renderTableData() {
      return this.state.team.sort((a, b) => a.score - b.score).map((team,num) =>{
        if(this.state.randomTeam.name == team.name){
         return(
           <Tr>
              <Th color='red'>{num+1}</Th>
              <Th color='red' team>{team.name}</Th>
              <Th color='red'>{team.score}</Th>
          </Tr>
         )     
        }else{
          return(
           <tr>
              <Th>{num+1}</Th>
              <Th team>{team.name}</Th>
              <Th>{team.score}</Th>
            </tr>
         )
        }
      }
        
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



