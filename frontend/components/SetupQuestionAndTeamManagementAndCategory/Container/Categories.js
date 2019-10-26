import React, { Component } from 'react'
import Header from '../Header'
import AddDelete from '../AddDelete'
import TableList from '../TableList'
import TotalList from '../TotalList'
import BackNext from '../BackNext'

export default class Categories extends Component {
    state = {
        data: [
          {
            id: 1,
            game_id: 1,
            name: "IvdG0018",
            created_at: "2019-10-06",
            updated_at: "2019-10-06",
            deleted_at: null,
            isChange: false,
            isChecked: false
          },
          {
            id: 2,
            game_id: 1,
            name: "p0cBzCsP",
            created_at: "2019-10-06",
            updated_at: "2019-10-06",
            deleted_at: null,
            isChange: false,
            isChecked: false
          },
          {
            id: 3,
            game_id: 1,
            name: "oPWhc8qo",
            created_at: "2019-10-06",
            updated_at: "2019-10-06",
            deleted_at: null,
            isChange: false,
            isChecked: false
          }
        ]
      };
      changeText = (e, id) => {
        let dataTemp = this.state.data;
        dataTemp[id].name = e.target.value;
        this.setState({ data: dataTemp });
      };
      onClick = id => {
        let dataTemp = this.state.data;
        dataTemp[id].isChange = !dataTemp[id].isChange;
        this.setState({ data: dataTemp });
      };
      onCheck = id => {
        let dataTemp = this.state.data;
        dataTemp[id].isChecked = !dataTemp[id].isChecked;
        this.setState({ data: dataTemp });
      };
      onDelete = () => {
        const datas = this.state.data
    datas.forEach((value, index )=>{
        if (value.isChecked) {
           datas.splice(index, 1)
            this.setState({
              data:datas
            })
            console.log(this.state.data)
            }
        })
    };
    render() {
        return (
            <div>
                <Header name="Categories" />
                <AddDelete search="Categories" onDelete={this.onDelete} onAdd={this.onAdd} />
                <TableList 
                titlename="Category"
                titlename="Team Name"
                data={this.state.data}
                changeText={this.changeText}
                clickToSave={this.onClick}
                onCheck={this.onCheck} 
                />  
                <TotalList
                  data={this.state.data}
                />
                <BackNext/>
            </div>
        )
    }
}
