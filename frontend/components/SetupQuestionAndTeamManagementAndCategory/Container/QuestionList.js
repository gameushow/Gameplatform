import React, { Component } from 'react'
import Header from '../Header'
import AddDeleteQuestion from '../AddDeleteQuestion'
import TableForQuestion from "../TableForQuestion";
import TotalList from "../TotalList";
import BackNext from "../BackNext";
import { Button, Modal, Container, Row, Form, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { getQuestion } from '../../../service/questions'

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
        questionList: [
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
                isChecked: false,
                category: { name: '' }
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
                isChecked: false,
                category: { name: '' }
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
                isChecked: false,
                category: { name: '' }
            }
        ],
        categories: [

        ]
    };
    async componentDidMount() {
        let questionList = await getQuestion();
        if (questionList.code <= 200) {
            this.setState({ questionList: questionList.data });
        }
    }
    onClick = id => {
        let dataTemp = this.state.questionList;
        dataTemp[id].isChange = !dataTemp[id].isChange;
        this.setState({ questionList: dataTemp });
    };
    onCheck = id => {
        let dataTemp = this.state.questionList;
        dataTemp[id].isChecked = !dataTemp[id].isChecked;
        this.setState({ questionList: dataTemp });
    };
    onDelete = () => {
        const datas = this.state.questionList
        datas.forEach((value, index) => {
            if (value.isChecked) {
                datas.splice(index, 1)
                this.setState({
                    questionList: datas
                })
            }
        })
    };
    getInitialState = () => {
        return { showModal, showModalAlert: false };
    };

    close = () => {
        this.setState({ showModal: false });
    };

    open = () => {
        this.setState({ showModal: true });
    };
    closeAlert = () => {
        this.setState({ showModalAlert: false });
    };

    openAlert = () => {
        this.state.questionList.forEach(element => {
            if(element.category === ""){
                this.setState({showModalAlert:true})
            }
        });  
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
                                <Form.Group as={Row} controlId="formHorizontal">
                                    <Form.Label column sm={1}>
                                        Category
                                    </Form.Label>
                                    <Col column sm={3}>
                                        <select class="custom-select btn-secondary active" id="inputGroupSelect01">
                                            <option disabled selected>Choose...</option>
                                            {this.state.categories.map((data, index) => {
                                                return(
                                                    <option value={data} key={index} >{data}</option>
                                                )
                                            })}
                                        </select>
                                    </Col>
                                    <Form.Label column sm={1}>
                                        Score
                                    </Form.Label>
                                    <Col column sm={2}>
                                        <Form.Control type="number" required />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        Time
                                    </Form.Label>
                                    <Col column sm={1}>
                                        <Form.Control type="number" required />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        m :
                                    </Form.Label>
                                    <Col column sm={1}>
                                        <Form.Control type="number" required />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        s
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" as="textarea" row="20" required />
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
                    questionList={this.state.questionList}
                    onCheck={this.onCheck}
                    onClick={this.open}
                />
                <TotalList
                    data={this.state.questionList}
                />
                <BackNext
                    onClick={this.openAlert}
                />
                <Modal show={this.state.showModalAlert} onHide={this.close} aria-labelledby="contained-modal-styling-title">
                    <Modal.Header>
                        <Modal.Title>ALERT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        โปรดตรวจสอบความถูกต้องของข้อมูลอีกครั้ง
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeAlert} variant="secondary">OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};
