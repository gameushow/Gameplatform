import React, { Component } from 'react'
import Header from '../Header'
import AddDelete from '../AddDelete'
import TableList from '../TableList'
import TotalList from '../TotalList'
import BackNext from '../BackNext'
export default class Categories extends Component {
    render() {
        return (
            <div>
                <Header name="Categories"/>
                <AddDelete search="Categories"/>
                <TableList titlename="Category"/>
                <TotalList/>
                <BackNext/>
            </div>
        )
    }
}
