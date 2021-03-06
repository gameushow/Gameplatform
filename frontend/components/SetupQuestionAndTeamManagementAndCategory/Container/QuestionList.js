import React, { Component } from 'react'
import Header from '../Header'
import AddDeleteQuestion from '../AddDeleteQuestion'
import TableForQuestion from "../TableForQuestion";
import TotalList from "../TotalList";
import BackNext from "../BackNext";
import { Button, Modal, Container, DropdownButton, Dropdown, Row, Form, Col } from 'react-bootstrap'
import styled from 'styled-components'

const WidthModal = styled(Modal)`
    .modal-80w{
        max-width: 80% !important; 
    }
`
const WidthButton = styled(Button)`
    width:80%;
`
export default class QuestionList extends Component {
    state = {
        data: [
            {
                id: 1,
                game_id: 1,
                name: "IvdG0018",
                description: "aaaaaaaaaa",
                score: "100",
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
                description: "bbbbbbbbbbb",
                score: "200",
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
                description: "ccccccccccc",
                score: "300",
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
                <AddDeleteQuestion
                    onDelete={this.onDelete}
                    onAdd={this.onAdd}
                    onClick={this.open}
                />
                <WidthModal show={this.state.showModal} onHide={this.close} dialogClassName="modal-80w" aria-labelledby="contained-custom-modal-styling-title-vcenter" centered>
                    <Modal.Body>
                        <Container>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={1}>
                                        Category
                                    </Form.Label>
                                    <Col column sm={3}>
                                        <select class="custom-select btn-secondary active" id="inputGroupSelect01">
                                            <option disabled selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Col>
                                    <Form.Label column sm={1}>
                                        Score
                                    </Form.Label>
                                    <Col column sm={2}>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        Time
                                    </Form.Label>
                                    <Col column sm={1}>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        m :
                                    </Form.Label>
                                    <Col column sm={1}>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        s
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" as="textarea" row="20" />
                                </Form.Group>
                                <Form.Group as={Row} className="justify-content-center">
                                    <Col className="col-sm-12 col-md-4 col-lg-4 offset-1">
                                        <WidthButton variant="secondary" type="submit">Save</WidthButton>
                                    </Col>
                                    <Col className="col-sm-12 col-md-4 offset-1">
                                        <WidthButton variant="secondary" onClick={this.close}>Cancel</WidthButton>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Container>
                    </Modal.Body>
                </WidthModal>
                <TableForQuestion
                    titlename="Category"
                    data={this.state.data}
                    onCheck={this.onCheck}
                    onClick={this.open}
                />
                <TotalList />
                <BackNext />
            </div>

        );
    }
};
