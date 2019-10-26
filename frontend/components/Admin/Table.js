import React, { Component } from 'react';
import BootBox from 'react-bootbox';
import Threebutton from './Threebutton'
import styled from 'styled-components'
import Checkbox from './Checkbox';
import fonts from '../../config/fonts'
import {Modal} from 'react-bootstrap';

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
            index: 0,
            mode: 'update',
            text: 'update',
            show: false,
            currentRandomTeam: {name:"-"},
            "success": true,
            "code": 200,
            team :[
                { name: 'Cala Finslands', score: 100 },
                { name: 'United Inortaofdo', score: 2000 },
                { name: 'United Badovaco', score: 200 },
                { name: 'Wekittsbral', score: 500 },
                { name: 'Southsiernguil', score: 500 },
                { name: 'Cala Finslands', score: 1000 },
                { name: 'Nkathe Nianewrial', score: 100 },
                { name: 'Myaneastko', score: 1000 },
                { name: 'Niva Gerrwan', score: 100 },
                { name: 'Western Verdeguern', score: 100 },
            ],
            data: [
                {
                    "id": 1,
                    "game_id": 1,
                    "name": "yIPM2Ow3",
                    "created_at": "2019-10-18 03:23:53",
                    "updated_at": "2019-10-18 03:23:53",
                    "deleted_at": null,
                    "isDone": true
                },
                {
                    "id": 2,
                    "game_id": 1,
                    "name": "yIPM2Ow3",
                    "created_at": "2019-10-18 03:23:53",
                    "updated_at": "2019-10-18 03:23:53",
                    "deleted_at": null,
                    "isDone": false
                },
                {
                    "id": 3,
                    "game_id": 1,
                    "name": "yIPM2Ow3",
                    "created_at": "2019-10-18 03:23:53",
                    "updated_at": "2019-10-18 03:23:53",
                    "deleted_at": null,
                    "isDone": false
                },
                {
                    "id": 4,
                    "game_id": 1,
                    "name": "yIPM2Ow3",
                    "created_at": "2019-10-18 03:23:53",
                    "updated_at": "2019-10-18 03:23:53",
                    "deleted_at": null,
                    "isDone": false
                },

            ]
        }
    }



    renderTableData() {

        return this.state.team.map((team, index) => {
            const { name, isDone } = this.state.data
            let checkbox = [];
            for (let i = 0; i < this.state.data.length; i++) {
                if (this.state.data[i].isDone == true) {
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
                    <td>{team.name}</td>
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

    next = i => {
        this.setState(state => {
            const items = state.team.map((team, j) => {
                if (j === i) {
                    if(state.data[j]!=null){
                        state.data[j].isDone = true,
                        this.state.team[j].score = this.state.team[j].score;
                        return state.data,this.state.team[j].score;
                    }
                    this.state.team[j].score = this.state.team[j].score;
                    return state.data,this.state.team[j].score;
                } else {
                    this.state.team[j].score = this.state.team[j].score;
                    return state.data,this.state.team[j].score;
                }
            });

            return {
                items, show: false, 
                index: this.state.index + 1,
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
        this.setState({
             mode: 'next',
             text: 'next'
        })
        console.log(this.state.mode)
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
                {console.log(this.state.show)}
                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ยืนยันที่จะเริ่มคำถามต่อไป</Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" onClick={()=>this.next(this.state.index+1)}>
                        Ok
                    </button>
                    <button variant="primary" onClick={this.handleClose}>
                        Cancel
                    </button>
                    </Modal.Footer>
                </Modal>
                <Threebutton 
                    next={() => { this.setState({ show: true,mode:'update',text:'update' }) }} 
                    text={this.state.text} 
                    mode={this.state.mode} 
                    data={this.state} 
                    update={this.update}
                    updateCurrentRandomTeam={this.updateCurrentRandomTeam}
                />
            </div>
        )
    }
}


