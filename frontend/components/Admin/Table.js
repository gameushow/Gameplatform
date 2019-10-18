import React, { Component } from 'react'
import fonts from '../../config/fonts'

export default class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            "success": true,
            "code": 200,
            "data": [
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
                    "id": 1,
                    "game_id": 1,
                    "name": "yIPM2Ow3",
                    "created_at": "2019-10-18 03:23:53",
                    "updated_at": "2019-10-18 03:23:53",
                    "deleted_at": null,
                    "isDone": false
                },
                {
                    "id": 1,
                    "game_id": 1,
                    "name": "yIPM2Ow3",
                    "created_at": "2019-10-18 03:23:53",
                    "updated_at": "2019-10-18 03:23:53",
                    "deleted_at": null,
                    "isDone": false
                },
                {
                    "id": 1,
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

    confirm(){
        this.setState({

        })
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
                </table>
            </div>
        )
    }
}


