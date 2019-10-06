import React, { Component } from 'react'
import Header from '../components/SetupQuestionAndTeamManagementAndCategory/Header'
import AddDelete from '../components/SetupQuestionAndTeamManagementAndCategory/AddDelete'
import TableList from '../components/SetupQuestionAndTeamManagementAndCategory/TableList'
export default class TeamList extends Component {
    render() {
        return (
            <div>
                <Header name="Team List"/>
                <AddDelete search="Team"/>
                <TableList titlename="Team Name"/>
            </div>
        )
    }
}
