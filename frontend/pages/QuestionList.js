import React, { Component } from 'react'
import QuestionList from '../components/SetupQuestionAndTeamManagementAndCategory/Container/QuestionList'
export default class QuestionLists extends Component {
    render() {
        return (
            <div>
                <Header name="Question List" />
                <AddDeleteQuestion />
            </div>
        )
    }
}
