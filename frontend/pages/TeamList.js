import React, { Component } from 'react'
import Header from '../components/SetupQuestionAndTeamManagementAndCategory/Header'
import AddDelete from '../components/SetupQuestionAndTeamManagementAndCategory/AddDelete'

export default class TeamList extends Component {
    render() {
        return (
            <div>
                <Header name="Team List"/>
                <AddDelete search="Team"/>
            </div>
        )
    }
}
