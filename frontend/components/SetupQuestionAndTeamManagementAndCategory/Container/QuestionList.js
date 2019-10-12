import React, { Component } from 'react'
import Header from '../Header'
import AddDeleteQuestion from '../AddDeleteQuestion'

export default class QuestionList extends Component {
    render() {
        return (
            <div>
                <Header name="Question List"/>
                <AddDeleteQuestion/>
            </div>
        )
    }
}
