import React, { Component } from 'react';
import BootBox from 'react-bootbox';
import Threebutton from './Threebutton'
import styled from 'styled-components'
import Checkbox from './Checkbox';
import fonts from '../../config/fonts'
import { Modal, Table } from 'react-bootstrap';
import { getScore, putScoreByTeamId, postScore } from '../../service/score';
import { getQuestion } from '../../service/questions'
import { getTeamList } from '../../service/team_member'
import Score from './Score'

const Title = styled.h1`
    font-size:${fonts.Paragraph};
    text-align : center;

`

const Table1 = styled.table`
    text-align : center;
    border-collapse: collapse;
    background-color:#C8C8C8; 
    width: auto;
    height: 586px;
    left: 193px;
    top: 249px;
    border: 2px solid #000000;
    box-sizing: border-box;
    th{
        border: 2px solid #000000;
        box-sizing: border-box;
        border-collapse: collapse;
    }
    tr{
        border: 2px solid #000000;
        box-sizing: border-box;
        border-collapse: collapse;
    }
    td{
        border: 2px solid #000000;
        box-sizing: border-box;
        border-collapse: collapse;
    }
`
const RoundColor = styled.table`
    background: #626262;

`

const Td = styled.td`
    background: white;
`

const Th = styled.th`
    background: white;
`

export default class table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            update: false,
            round: 1,
            mode: 'Update',
            show: false,
            currentRandomTeam: { name: "-" },
            "success": true,
            "code": 200,
            team: [],
            data: [],
            status:[],
            teamList:[]
        }
    }



    renderTableData() {

        return this.state.team.map((team, index) => {
            let checkbox = [];
            this.state.status.push(0);
            for (let i = 0; i < this.state.data.length; i++) {
                if (i + 1 <= this.state.round) {
                    if(i+1==this.state.round){
                        checkbox.push(
                            <Td><Checkbox data={this.state} num={index} score={this.state.team.score} status={this.state.status} /></Td>
                        ); 
                    }else{
                      checkbox.push(
                            <td><Checkbox data={this.state} num={index} score={this.state.team.score} status={this.state.status} /></td>
                        );  
                    }     
                }
                else {
                    checkbox.push(
                        <td><Checkbox data={this.state} disabled={true} num={index} score={this.state.team.score} status={this.state.status} /></td>
                    );
                }

            }
            return (
                <tr>
                    <td>{team.name}</td>
                    {checkbox}
                </tr>
            )
        })
    }

    //ต้องmap teamแทนdata.map

    renderTableHeader() {
        let array = [];
        for (let i = 0; i < this.state.data.length; i++) {
            if(i+1==this.state.round){
                array.push(
                    <Th>{i + 1}</Th>
                ); 
            }else{
              array.push(
                    <th>{i + 1}</th>
                );  
            }
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
                status:[],
        });
    };

    handleClose = () => {
        this.setState({ show: false })
    }

    async update(round) {
        let array;
        let data = [];
        this.setState(state => {
            state.team.map((team, index) => {

                for (let i = 0; i < this.state.data.length; i++) {
                    if (i+1 == round) {
                        let team_id = 0;
                        this.state.teamList.forEach(element => {
                            if(team.name == element.name){
                                team_id = element.id;
                            }
                        });
                        data.push(
                            {
                                round:round,
                                question_id:round,
                                team_id:team_id,
                                game_id:1,
                                status:this.state.status[index]
                            },
                        )
                    }
                    array = {data}
                }
                
                
            });           
            console.log(array)
            let responseData = postScore(array);
            console.log(responseData)
        })
        
        let teamData = await getScore();
        this.state.team = teamData.data;
        //this.setState({team: teamData.data})
         
    }

    async componentDidMount() {
        let scoreData = await getScore();
        let questionData = await getQuestion();
        let TeamData = await getTeamList();
        console.log(scoreData);
        console.log(TeamData.data);
        if(scoreData.code == 200){
            this.setState({
                teamList: TeamData.data,
                team: scoreData.data,
                data: questionData.data
            });
        }
    }

    updateCurrentRandomTeam = randomTeam => {
        this.setState({ currentRandomTeam: randomTeam });
        console.log(this.state.currentRandomTeam)
    }

    render() {
        return (
            <div class="container">
                <Title>ROUND {this.state.round}</Title>
                <Title>Team: {this.state.currentRandomTeam.name}</Title>
                <Title>Score: -</Title>
                <div className="d-flex justify-content-center">
                   <Table1>
                        <thead align="center">
                            <tr>
                                    <th>
                                        team
                                    </th>
                                    {this.renderTableHeader()}
                                </tr>
                                {this.renderTableData()}  
                                
                        </thead>
                    </Table1>   
                    <Score/> 
                </div>
                
                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ยืนยันที่จะเริ่มคำถามต่อไป</Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={() => this.next()}>
                            Ok
                    </button>
                        <button variant="primary" onClick={this.handleClose}>
                            Cancel
                    </button>
                    </Modal.Footer>
                </Modal>
                <Threebutton
                    next={() => { this.setState({ show: true, mode: 'Update' }) }}
                    text={this.state.text}
                    mode={this.state.mode}
                    data={this.state}
                    update={() => { this.update(this.state.round); this.setState({ mode: 'Next' }) }}
                    updateCurrentRandomTeam={this.updateCurrentRandomTeam}
                />
            </div>
        )
    }
}


