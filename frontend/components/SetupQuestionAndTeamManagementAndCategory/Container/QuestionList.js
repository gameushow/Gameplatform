import React, { Component } from 'react'
import Header from '../Header'
import AddDeleteQuestion from '../AddDeleteQuestion'
import TableList from "../TableList";
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
    width:250px;
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
                <AddDeleteQuestion
                    onDelete={this.onDelete}
                    onAdd={this.onAdd}
                    onClick={this.open}
                />
                <WidthModal show={this.state.showModal} onHide={this.close} dialogClassName="modal-80w" aria-labelledby="contained-custom-modal-styling-title-vcenter" centered>
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="contained-custom-modal-styling-title-vcenter">Modal heading</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Container>
                            {/* <Row>
                                <form>
                                    Category <DropdownButton id="dropdown-item-button" title="Dropdown button" variant="secondary">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </form>
                            </Row> */}
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={1}>
                                        Category
                                    </Form.Label>
                                    <Col column sm={3}>
                                        <DropdownButton id="dropdown-item-button" title="Dropdown button" variant="secondary">
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                                        </DropdownButton>
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
                                    <Form.Control type="text" as="textarea" row="20"/>
                                </Form.Group>
                                <Form.Group as={Row} className="justify-content-center">
                                    <Col className="col-4 offset-1">
                                    <WidthButton variant="secondary" type="submit">Save</WidthButton>
                                    </Col>
                                    <Col className="col-4 offset-1">
                                    <WidthButton variant="secondary" type="submit">Cancel</WidthButton>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Container>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer> */}
                </WidthModal>
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
