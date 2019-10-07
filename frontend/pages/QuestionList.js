import React, { Component } from 'react'
import Header from '../components/SetupQuestionAndTeamManagementAndCategory/Header'
import AddDelete from '../components/SetupQuestionAndTeamManagementAndCategory/AddDelete'
import TableList from '../components/SetupQuestionAndTeamManagementAndCategory/TableList'
import TotalList from '../components/SetupQuestionAndTeamManagementAndCategory/TotalList'
import BackNext from '../components/SetupQuestionAndTeamManagementAndCategory/BackNext'

export default class QuestionList extends Component {
    render() {
        return (
            <div>
                <Header name="Question List"/>
                <AddDelete/>
                <TableList titlename="Question"/>
                <TotalList/>
                <BackNext/>
            </div>
        )
    }
}
