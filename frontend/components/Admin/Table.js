import React, { Component } from 'react'
import fonts from '../../config/fonts'
<<<<<<< HEAD
import BootBox from 'react-bootbox';
=======
import Threebutton from './Threebutton'
import styled from 'styled-components'
>>>>>>> adminmanagement

export default class table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            index:0,
            show:false,
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
        return this.state.data.map((data, index) => {
            const { name , isDone } = data
            let checkbox = [];
            for (let i = 0; i < this.state.data.length; i++) {
                if (this.state.data[i].isDone == true) {
                    checkbox.push(
                        <td><input type="checkBox" /></td>
                    );
                }
                else {
                    checkbox.push(
                        <td><input type="checkBox" disabled/></td>
                    );
                }

            }
            return (
                <tr key={name}>
                    <td>{name}</td>
                    {checkbox}
                    <td>score</td>
                </tr>
            )
        })
    }
    //ทำงี้ได้มั้ยงับ

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
                  return data ;
                } else {
                  return data;
                }
              });
        
            return {
                items, show:false,index:this.state.index+1,
            };
        });
    };
    
    handleClose = () => {
        this.setState({show:false})
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Team</th>
                            {this.renderTableHeader()}
                            <th>Score</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                    <button onClick={()=>{this.setState({show:true})}}>Next</button>
                    <BootBox 
                    message="Do you want to Continue?"
                    show={this.state.show} 
                    onYesClick = {() => this.next(this.state.index+1)}
                    onNoClick = {this.handleClose}
                    onClose = {this.handleClose}/>
                </table>
                <Threebutton/>
            </div>
        )
    }
}


