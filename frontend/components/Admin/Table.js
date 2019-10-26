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


const team = [
    { name: 'Cala Finslands', score: '100' },
    { name: 'United Inortaofdo', score: '2000' },
    { name: 'United Badovaco', score: '200' },
    { name: 'Wekittsbral', score: '500' },
    { name: 'Southsiernguil', score: '500' },
    { name: 'Cala Finslands', score: '1000' },
    { name: 'Nkathe Nianewrial', score: '100' },
    { name: 'Myaneastko', score: '1000' },
    { name: 'Niva Gerrwan', score: '100' },
    { name: 'Western Verdeguern', score: '100' },
];
export default class table extends Component {


    constructor(props) {
        super(props)

        this.state = {
            round:1,
            mode: 'update',
            index: 0,
            show: false,
            "success": true,
            "code": 200,
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

        return team.map((team, index) => {
            const { name, isDone } = this.state.data
            let checkbox = [];
            for (let i = 0; i < this.state.data.length; i++) {
                if (this.state.data[i].isDone == true) {
                    checkbox.push(
                            <td><Checkbox/></td>
                    );
                }
                else {
                    checkbox.push(
                           <td><Checkbox disabled={true}/></td> 
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
            const items = state.data.map((data, j) => {
                if (j === i) {
                    data.isDone = true
                    return data;
                } else {
                    return data;
                }
            });

            return {
                items, show: false, index: this.state.index + 1, mode: 'update'
                ,round : this.state.round + 1
            };
        });
    };

    handleClose = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <div>
                <Title>ROUND {this.state.round}</Title>
                <Title>Team: -</Title>
                <Title>Score: -</Title>

                <table>
                    <tbody>
                        <tr>
                            <th>
                                team
                            </th>
                            {this.renderTableHeader()}
                            <th>
                                score
                            </th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
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
                <Threebutton onClick={() => { this.setState({ show: true }) }} mode={this.state.mode} />
            </div>
        )
    }
}


