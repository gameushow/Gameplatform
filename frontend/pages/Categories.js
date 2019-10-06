import React, { Component } from 'react'
import Header from '../components/SetupQuestionAndTeamManagementAndCategory/Header'
import AddDelete from '../components/SetupQuestionAndTeamManagementAndCategory/AddDelete'
import TableList from '../components/SetupQuestionAndTeamManagementAndCategory/TableList'

export default class Categories extends Component {
    render() {
        return (
            <div>
                <Header name="Categories"/>
                <AddDelete search="Categories"/>
                <TableList titlename="Category"/>
            </div>
        )
    }
}
