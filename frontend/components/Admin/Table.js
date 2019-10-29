import React, { Component } from 'react';
import BootBox from 'react-bootbox';
import Threebutton from './Threebutton'
import styled from 'styled-components'
import Checkbox from './Checkbox';
import fonts from '../../config/fonts'
import {Modal} from 'react-bootstrap';
import {getScore,putScoreByTeamId,postScore} from '../../service/score';
import {getQuestion} from '../../service/questions'

const Title = styled.h1`
    font-size:${fonts.Paragraph};
    text-align : center;

`
const Table1 = styled.table`
    text-align : center;
`

export default class table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            update:false,
            round:1,
            mode: 'Update',
            show: false,
            currentRandomTeam: {name:"-"},
            "success": true,
            "code": 200,
            team :[],
            data: [],
            status:[]
        }
    }



    renderTableData() {

        return this.state.team.map((team, index) => {
            let checkbox = [];
            this.state.status.push(0);
            for (let i = 0; i < this.state.data.length; i++) {
                if (i+1 <= this.state.round) {
                    checkbox.push(
                            <td><Checkbox data={this.state} num={index} score={this.state.team.score} status={this.state.status}/></td>
                    );
                }
                else {
                    checkbox.push(
                           <td><Checkbox data={this.state} disabled={true} num={index} score={this.state.team.score} status={this.state.status}/></td> 
                    );
                }

            }
            return (
                <tr>
                    <td>{team.team_name}</td>
                    {checkbox}
                    <td>{team.score}</td>
                </tr>
            )
        })
        
    }

    //ต้องmap teamแทนdata.map

    renderTableHeader() {
        let array = [];
        for (let i = 0; i < this.state.data.length; i++) {
            array.push(
                <th>{i + 1}</th>
            );
        }
        return (
            array
        );
    }

    next = () => {
        this.setState({
                show: false, 
                round : this.state.round + 1,
                mode: 'Update',
                status:[]
        });
    };

    handleClose = () => {
        this.setState({ show: false })
    }

    async update(round){
        let array;
        let data = [];
        this.setState(state=>{
            state.team.map((team, index) => {
                
                for (let i = 0; i < this.state.data.length; i++) {
                    if (i+1 == round) {
                        data.push(
                            {
                                round:round,
                                question_id:round,
                                team_id:index,
                                game_id:1,
                                status:this.state.status[index]
                            },
                        )    
                    }
                    array = {data}
                    putScoreByTeamId(array,round)
                }
                console.log(array)
            });           
        })
         
    }

    async componentDidMount(){
        let scoreData = await getScore();
        let questionData = await getQuestion();
        console.log(scoreData);
        console.log(questionData)
        if(scoreData.code == 200){
            this.setState({
                team: scoreData.data,
                data: questionData.data
            });
        }   
    }

    updateCurrentRandomTeam = team => {
        this.setState({currentRandomTeam: team});
    }

    render() {
        return (
            <div class="container">
                <Title>ROUND {this.state.round}</Title>
                <Title>Team: {this.state.currentRandomTeam.name}</Title>
                <Title>Score: -</Title>

                <Table1 class="table table-bordered">
                    <thead align="center">
                        <tr>
                            <th >
                                team
                            </th>
                            {this.renderTableHeader()}
                            <th>
                                score
                            </th>
                        </tr>
                        {this.renderTableData()}
                    </thead>
                </Table1>
                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ยืนยันที่จะเริ่มคำถามต่อไป</Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" onClick={()=>this.next()}>
                        Ok
                    </button>
                    <button variant="primary" onClick={this.handleClose}>
                        Cancel
                    </button>
                    </Modal.Footer>
                </Modal>
                <Threebutton 
                    next={() => { this.setState({ show: true,mode:'Update' })}}
                    text={this.state.text} 
                    mode={this.state.mode} 
                    data={this.state} 
                    update={()=>{this.update(this.state.round);this.setState({ mode:'Next' })}}
                />
            </div>
        )
    }
}


