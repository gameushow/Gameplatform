import React, { Component } from "react";
import Header from "../Header";
import AddDelete from "../AddDelete";
import TableList from "../TableList";
import TotalList from "../TotalList";
import BackNext from "../BackNext";
import { getTeamList,putTeamListById,postTeamList } from "../../../service/team_member";
export default class TeamList extends Component {
  state = {
    allChecked: false,
    teamList: [
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
    ],
    check:[
      {isChecked: false},
      {isChecked: false},
      {isChecked: false},
      {isChecked: false},
      {isChecked: false},
      {isChecked: false},
      {isChecked: false},
    ]
    
  };

 async componentDidMount(){
    let teamList = await getTeamList();
    if (teamList.code <= 200 ){
      this.setState({teamList:teamList.data});
    }
  }

  changeText = (e, id) => {
    let dataTemp = this.state.teamList;
    dataTemp[id].name = e.target.value;
    this.setState({ teamList: dataTemp });
  };
  onClick = async id => {
    let dataTemp = this.state.teamList;
    dataTemp[id].isChange = !dataTemp[id].isChange;
    await putTeamListById( dataTemp[id]);
    this.setState({ teamList: dataTemp });
  };
  handleChange = id => {
    // let dataTemp = this.state.teamList;
    // dataTemp[id].isChecked = !dataTemp[id].isChecked;
    // this.setState({ teamList: dataTemp });

  };
  onDelete = () => {
    const datas = this.state.teamList
    datas.forEach((value, index )=>{
        if (value.isChecked) {
           datas.splice(index, 1)
            this.setState({
              teamList:datas
            })
        }
    })
  };
  onAdd = () => {
    let teamList = postTeamList();
    if (teamList.code <= 200 ){
      this.setState({teamList:teamList.data});
  }
  handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every(item => item.isChecked);
      }
      return { list, allChecked };
    });
  };
}
  render() {
    return (
      <div>
        <Header name="Team List" />
        <AddDelete 
            search="Team"
            onDelete={this.onDelete}
            onAdd={this.onAdd}
            />
        <TableList
            titlename="Team Name"
            data={this.state.teamList}
            checkforall={this.state.check}
            changeText={this.changeText}
            clickToSave={this.onClick}
            check={this.state.allChecked}       
            onChange={this.handleChange}
        />
        <TotalList
          data =  {this.state.teamList}
        />
        <BackNext />
      </div>
    );
  }
}
