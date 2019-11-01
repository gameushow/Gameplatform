import React, { Component } from "react";
import Header from "../Header";
import AddDelete from "../AddDelete";
import TableList from "../TableList";
import TotalList from "../TotalList";
import BackNext from "../BackNext";
import { getTeamList,putTeamListById,postTeamList,deleteTeamListById } from "../../../service/team_member";
export default class TeamList extends Component {
  state = {
    name:'',
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
    ]
  };

 async componentDidMount(){
    let teamList = await getTeamList();
    if (teamList.code <= 200 ){
      this.setState({teamList:teamList.data});
    }
  }
  changeName = (name) => {
    this.setState({name:name.target.value})
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
  onCheck = id => {
    let dataTemp = this.state.teamList;
    dataTemp[id].isChecked = !dataTemp[id].isChecked;
    this.setState({ teamList: dataTemp });
  };
  onDelete = async () => {
    const datas = this.state.teamList
    datas.forEach ( async (value)=>{
        if (value.isChecked) {
         await deleteTeamListById(value)
          let teamList = await getTeamList();
          if (teamList.code == 200 ){
            this.setState({teamList:teamList.data});
          }   
        }
    })
  };
   onAdd = async () => {
    let teamList = await postTeamList({name:this.state.name,game_id:1});
    if (teamList.code == 201 ){
      this.setState({teamList:teamList.data});
  }
}
  render() {
    return (
      <div>
        <Header name="Team List" />
        <AddDelete 
            changeName={this.changeName}
            name={this.state.name}
            search="Team"
            onDelete={this.onDelete}
            onAdd={this.onAdd}
            />
        <TableList
            titlename="Team Name"
            data={this.state.teamList}
            changeText={this.changeText}
            clickToSave={this.onClick}
            onCheck={this.onCheck}       
        />
        <TotalList
          data =  {this.state.teamList}
        />
        <BackNext 
        pathback = "questionlist"
        />
      </div>
    );
  }
}
