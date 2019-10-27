import React, { Component } from 'react';
import BootBox from 'react-bootbox';
import Threebutton from './Threebutton'
import styled from 'styled-components'
import Checkbox from './Checkbox';
import fonts from '../../config/fonts'
import {Modal} from 'react-bootstrap';
import {getScore} from '../../service/score';
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
            round:1,
            mode: 'update',
            text: 'Update',
            show: false,
            "success": true,
            "code": 200,
            team :[],
            data: []
        }
    }



    renderTableData() {

        return this.state.team.map((team, index) => {
            const { name } = this.state.data
            let checkbox = [];
            for (let i = 0; i < this.state.data.length; i++) {
                if (i+1 <= this.state.round) {
                    checkbox.push(
                            <td><Checkbox data={this.state} num={index} score={this.state.team.score}/></td>
                    );
                }
                else {
                    checkbox.push(
                           <td><Checkbox data={this.state} disabled={true} num={index} score={this.state.team.score}/></td> 
                    );
                }

            }
            return (
                <tr key={name}>
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

    next = (i) => {
        this.setState(state => {
            const items = state.team.map((team, j) => {
                if (j === i) {
                    if(state.data[j]!=null){
                        /*let array = {
                            data:[
                                {
                                    round:1,
                                    question_id:1,
                                    team_id:1,
                                    game_id:1,
                                    status:-1
                                },
                                {},
                                {}
                            ]
                        }

                        putScoreByTeamId(array,)*/
                        //this.state.team[j].score = this.state.team[j].score;
                        return state.data
                    }
                } else {
                    return state.data
                }
            });

            return {
                items, show: false, 
                round : this.state.round + 1,
                mode: 'update',
                text: 'update'
            };
        });
            };

    handleClose = () => {
        this.setState({ show: false })
    }

    update = () => {
        console.log("table update")
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

    render() {
        return (
            <div class="container">
                <Title>ROUND {this.state.round}</Title>
                <Title>Team: -</Title>
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
                    <button variant="secondary" onClick={()=>this.next(this.state.round)}>
                        Ok
                    </button>
                    <button variant="primary" onClick={this.handleClose}>
                        Cancel
                    </button>
                    </Modal.Footer>
                </Modal>
                <Threebutton 
                    next={() => { this.setState({ show: true,mode:'update',text:'update' })}}
                    text={this.state.text} 
                    mode={this.state.mode} 
                    data={this.state} 
                    update={this.update}
                />
            </div>
        )
    }
}


