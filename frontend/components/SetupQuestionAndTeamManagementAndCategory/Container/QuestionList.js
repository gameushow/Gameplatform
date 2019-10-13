import React, { Component } from 'react'
import Header from '../Header'
import AddDeleteQuestion from '../AddDeleteQuestion'
import TableList from "../TableList";
import TotalList from "../TotalList";
import BackNext from "../BackNext";
import { Button, Modal } from 'react-bootstrap'
import styled from 'styled-components'

const BlockButton = styled.div`
margin-right:170px;
`
export default class QuestionList extends Component {

    state = {
        data: [
            {
                id: 1,
                game_id: 1,
                name: "IvdG0018",
                created_at: "2019-10-06",
                updated_at: "2019-10-06",
                deleted_at: null,
                isChange: false,
                isChecked: false
            },
            {
                id: 2,
                game_id: 1,
                name: "p0cBzCsP",
                created_at: "2019-10-06",
                updated_at: "2019-10-06",
                deleted_at: null,
                isChange: false,
                isChecked: false
            },
            {
                id: 3,
                game_id: 1,
                name: "oPWhc8qo",
                created_at: "2019-10-06",
                updated_at: "2019-10-06",
                deleted_at: null,
                isChange: false,
                isChecked: false
            }
        ]
    };
    onClick = id => {
        let dataTemp = this.state.data;
        dataTemp[id].isChange = !dataTemp[id].isChange;
        this.setState({ data: dataTemp });
    };
    onCheck = id => {
        let dataTemp = this.state.data;
        dataTemp[id].isChecked = !dataTemp[id].isChecked;
        this.setState({ data: dataTemp });
    };
    onDelete = () => {
        const data = this.state.data
        data.forEach((value, index) => {
            if (value.isChecked) {
                delete data[index]
                this.setState({ data })
            }
        })
    };


    getInitialState = () => {
        return { showModal: false };
    };

    close = () => {
        this.setState({ showModal: false });
    };

    open = () => {
        this.setState({ showModal: true });
    };

    render() {
        return (
            <div>
                <Header name="Question List" />
                {/* <AddDeleteQuestion
                    onDelete={this.onDelete}
                    onAdd={this.onAdd}
                    onClick={this.open}
                /> */}
                <BlockButton className="d-flex justify-content-between">
                    <div className="ml-auto">
                <Button variant="success" onClick={this.open}>+ Add</Button>
                <Button variant="danger">- Delete</Button>
                </div>
                </BlockButton>
                
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <h4>Popover in a modal</h4>


                        <hr />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <TableList
                    titlename="Question Name"
                    data={this.state.data}
                    clickToSave={this.onClick}
                    onCheck={this.onCheck}
                    onColor={this.onColor}
                />
                <TotalList />
                <BackNext />
            </div>

        );
    }
};
