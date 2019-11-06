import React, { Component } from 'react'
import Header from '../Header'
import AddDeleteQuestion from '../AddDeleteQuestion'
import TableForQuestion from "../TableForQuestion";
import TotalList from "../TotalList";
import BackNext from "../BackNext";
import { Button, Modal, Container, Row, Form, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { getQuestion, postQuestion, deleteQuestionById, putQuestionById } from '../../../service/questions'
import { getCategory } from '../../../service/category';

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
        name: '',
        questionList: [],
        categories: [{}],
        isEdit: false,
        questionEdited: { category: { name: 'Choicse...', id: null }, question: '', id: 0, score: 0, time: 0 }
    };
    async componentDidMount() {
        let categories = await getCategory();
        if (categories.code <= 201) {
            this.setState({ categories: categories.data });
        }
        let questionList = await getQuestion();
        if (questionList.code <= 200) {
            this.setState({ questionList: questionList.data });
        }
    }
    onClick = async id => {
        let dataTemp = this.state.questionList;
        dataTemp[id].isChange = !dataTemp[id].isChange;
        await putQuestionById(dataTemp[id]);
        this.setState({ questionList: dataTemp });
    };
    onCheck = id => {
        let dataTemp = this.state.questionList;
        dataTemp[id].isChecked = !dataTemp[id].isChecked;
        this.setState({ questionList: dataTemp });
    };
    onAdd = async (event) => {
        event.preventDefault()
        let data = {
            category_id: event.target.category.value,
            game_id: 1,
            id: this.state.questionEdited.id,
            question: event.target.description.value,
            score: event.target.score.value,
            time: (`${(event.target.TimeMin.value * 60000) + (event.target.TimeSec.value * 1000)}`)
        };
        if (this.state.isEdit) {
            await putQuestionById(data)
            this.setState({ isEdit: false, questionEdited: { category: { name: 'Choicse...', id: null }, question: '', id: 0, score: 0, time: 0 } })
        } else {
            await postQuestion(data)
        }
        let questionList = await getQuestion();
        if (questionList.code <= 201) {
            this.setState({ questionList: questionList.data });
        }
        this.close()
    };

    onDelete = () => {
        const data = this.state.questionList
        data.forEach(async (value, index) => {
            if (value.isChecked) {
                await deleteQuestionById(value);
                let questionList = await getQuestion();
                this.setState({
                    questionList: []
                })
                if (questionList.code <= 201) {
                    this.setState({ questionList: questionList.data });
                }
            }
        })
    };
    getInitialState = () => {
        return { showModal, showModalAlert: false };
    };

    close = () => {
        this.setState({ showModal: false });
    };

    open = (id) => {
        if (id) {
            return new Promise((resolve, reject) => {
                this.setState({ questionEdited: this.state.questionList[id], isEdit: true })
                return resolve('')
            }).then(() => {
                this.setState({ showModal: true });
            })
        }
        else {
            return new Promise((resolve, reject) => {
                this.setState({
                    questionEdited: { category: { name: 'Choicse...', id: null }, question: '', id: 0, score: 0, time: 0 }
                    , isEdit: false
                })
                return resolve('')
            }).then(() => {
                this.setState({ showModal: true });
            })
            this.setState({ showModal: true });
        }
    };
    closeAlert = () => {
        this.setState({ showModalAlert: false });
    };

    openAlert = () => {
        this.state.questionList.forEach(element => {
            if (element.category === null) {
                this.setState({ showModalAlert: true })
            }
        });
    };
    render() {
        return (
            <div>
                <Header name="Question List" />
                <AddDeleteQuestion
                    onDelete={this.onDelete}
                    onClick={this.open}
                />
                <WidthModal show={this.state.showModal} onHide={this.close} className='max-width' dialogClassName="modal-80w" aria-labelledby="contained-custom-modal-styling-title-vcenter" centered>
                    <Modal.Body>
                        <Container>
                            <Form onSubmit={this.onAdd}>
                                <Form.Group as={Row} controlId="formHorizontal">
                                    <Form.Label column sm={1}>
                                        Category
                                    </Form.Label>
                                    <Col column sm={3}>
                                        <select defaultValue={this.state.questionEdited.category.id} class="custom-select btn-secondary active" id="category">
                                            <option disabled selected>{this.state.questionEdited.category.name}</option>
                                            {this.state.categories.map((data, index) => {
                                                return (
                                                    <option value={data.id} key={index}>{data.name}</option>
                                                )
                                            })}
                                        </select>
                                    </Col>
                                    <Form.Label column sm={1} >
                                        Score
                                    </Form.Label>
                                    <Col column sm={2}>
                                        <Form.Control type="number" defaultValue={this.state.questionEdited.score} required id="score" />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        Time
                                    </Form.Label>
                                    <Col column sm={1}>
                                        <Form.Control className='pl-3' type="number" defaultValue={Math.floor(this.state.questionEdited.time / 60000)} required id="TimeMin" />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        m :
                                    </Form.Label>
                                    <Col column sm={1}>
                                        <Form.Control type="number" defaultValue={((this.state.questionEdited.time % 60000) / 1000).toFixed(0)} required id="TimeSec" />
                                    </Col>
                                    <Form.Label column sm={1}>
                                        s
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.questionEdited.question} as="textarea" row="20" id="description" required />
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
                    pathnext="TeamList"
                    pathback="Categories"
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
