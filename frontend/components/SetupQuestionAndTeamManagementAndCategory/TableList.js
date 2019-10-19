import React, { Component } from "react";
import styled from "styled-components";

const TableBack = styled.table`
  width: 100%;
  background: #ebebeb;
  border: 2px solid #000000;
  box-sizing: border-box;
  height: 430px;
`;
const SpaceTable = styled.div`
  padding-top: 0.5em;
`;
const Tablestyle = styled.table`
  width: 100%;
  border-collapse:collapse;
  border-right:hidden;
  border-left:hidden;
  thead{
    background: #808080;
    border-bottom: 2px solid #000000;
    box-sizing: border-box; 
  }
  th{
    text-align:center;
    width:70px;
    height: 45px;
    font-size: 24px;
    line-height: 28px;
    border-collapse:collapse;
    border-left:2px solid #000000;
    border-right:2px solid #000000;
  }
  td{
    height: 45px;
    font-size: 24px;
    line-height: 28px;
    border-collapse:collapse;
    border-left:2px solid #000000;
    border-right:2px solid #000000;
    border-bottom:2px solid #000000;
    background-color: #C4C4C4;
  }
`
const Check = styled.div`
  input[type=checkbox] {
    background: #e8e7e7;
    border: 1px solid #7c7c7c;
    border-radius: 4px;
    width:15px;
    height: 20px;
  }
  padding-top: 3px;
  text-align:center;
`
const Fonttext = styled.div`
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px;
  padding-top:8px;
`
const Fonttextdata = styled.td`
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px; 
  input[type=text][disabled]{
    background-color: #C4C4C4;
    border:none;
    color:black;
  }
`
const Fix = styled.button`
  border: none;
  background: none;
`
const Save = styled.button`
    border: none;
    width: 44.1px;
    border-radius: 6px;
    background-color: #37AB00;
    color:#fff;
    font-size: 12.5px;   
`
const Iddata = styled.td`
  text-align:center;
`
const Rowedit = styled(Iddata)`
`
const Iconedit = styled.img`
  :hover{
    content:url("/static/edit_hover.png");
    width:30px;
    height:30px;
  }
  :active{
    content:url("/static/edit_pressed.png");
    width:30px;
    height:30px;
  }
`

export default class TableList extends Component {
  render() {
    return (
      <SpaceTable className="container">
        <TableBack>
          <Tablestyle>
            <thead>
              <th>#</th>
              <th>
                <Check>
                  <input type="checkbox" />
                </Check>
              </th>
              <Fonttext>{this.props.titlename}</Fonttext>
              <th></th>
            </thead>
            {
            this.props.data.map((items, i) => (
              <tr>
                <Iddata>{i+1}</Iddata>
                <td>
                  <Check >
                    <input type="checkbox" onChange={()=>this.props.onCheck(i)}/>
                  </Check >
                </td>
                <Fonttextdata>
                  {
                    this.props.data[i].isChange?
                    <input
                    type="text"
                    onChange={e => this.props.changeText(e,i)}
                    value={items.name}
                    ref="edit"
                    id={"inputid" + i}
                    disabled={!items.isChange} 
                    />:
                    <input
                    type="text"
                    onChange={e => this.props.changeText(e,i)}
                    value={items.name}
                    ref="edit"
                    id={"inputid" + i}
                    disabled={!items.isChange}
                    />
                  }             
                </Fonttextdata>
                <Rowedit>
                  <Fix onClick={() => this.props.clickToSave(i)}>
                    {
                    this.props.data[i].isChange?
                      <Save>SAVE</Save>:
                      <Iconedit src="/static/edit_icon.png" width="30px" height="30px"></Iconedit>
                    }
                  </Fix>
                </Rowedit>
              </tr>
            ))}
          </Tablestyle>
        </TableBack>
      </SpaceTable>
    )
  }
}
