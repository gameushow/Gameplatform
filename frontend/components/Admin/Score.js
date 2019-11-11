import React, { Component } from 'react'
import { getScore, putScoreByTeamId, postScore } from '../../service/score';
import styled from 'styled-components'

const Table1 = styled.table`
    text-align : center;
    border-collapse: collapse;
    background-color:#C8C8C8; 
    width: auto;
    height: 380.800px;
    left: 193px;
    top: 249px;
    border: 2px solid #000000;
    border-left:none;
    box-sizing: border-box;
    th{
        border: 2px solid #000000;
        box-sizing: border-box;
        border-collapse: collapse;
        border-left:none;
        height: auto;
    }
    tr{
        border: 2px solid #000000;
        box-sizing: border-box;
        border-collapse: collapse;
        border-left:none;
        height: 44px;
    }
    td{
        border: 2px solid #000000;
        box-sizing: border-box;
        border-collapse: collapse;
        border-left:none;
    }
`
export default class Score extends Component {
    getAllScore(){
        return this.props.score.map((score, index) => {
            return (
                <tr>
                    {score.score}
                </tr>
            )
        })
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     return nextProps.score !== this.props.score;
    // }

    render() {
        return (
            <Table1>
                <thead align="center">
                                <th>
                                    score
                                </th>
                            {this.getAllScore()}
                                
                </thead>
            </Table1>
            
                
        )
    }
}
