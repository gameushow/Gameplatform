import React, { Component } from 'react'
import Header from '../components/SetupQuestionAndTeamManagementAndCategory/Header'
import AddDeleteQuestion from '../components/SetupQuestionAndTeamManagementAndCategory/AddDeleteQuestion'

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
