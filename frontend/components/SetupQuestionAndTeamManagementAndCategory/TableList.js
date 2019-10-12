import React, { Component } from "react";
import styled from "styled-components";

const TableBack = styled.div`
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
  height: 50px;
  width: 100%;
  background-color: #808080;
  border: 2px #000000;
  border-bottom: 2px solid;
  border-collapse: collapse;
  border-left: hidden;
  border-right: hidden;
  th {
    text-align: center;
    width: 80px;
    border-right: 2px solid #000000;
    border-left: 2px solid #000000;
  }
  tr {
    font-size: 24px;
    line-height: 28px;
  }
`
const Check = styled.form`
  input[type="checkbox"] {
    background: #e8e7e7;
    border: 1px solid #7c7c7c;
    border-radius: 4px;
    width: 20px;
    height: 20px;
  }
  padding-top: 3px;
`
const Fonttext = styled.td`
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px;
`
const Fix = styled.button`
  border: none;
  background: none;
`
const Save = styled.button`
    border: none;
    width: 44.1px;
    height: 17.41px;
    background-color: #37AB00;
    color:#fff;
    font-size: 18px;
     
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
                <td>{i+1}</td>
                <td>
                  <Check >
                    <input type="checkbox" onChange={()=>this.props.onCheck(i)}/>
                  </Check >
                </td>
                <td>
                  <input
                    type="text"
                    onChange={e => this.prop.changeText(e,i)}
                    defaultValue={items.name}
                    ref="edit"
                    id={"inputid" + i}
                    disabled={!items.isChange}
                  />
                </td>
                <td>
                  <Fix onClick={() => this.props.clickToSave(i)}>
                    {
                    this.props.data[i].isChange?
                      <Save>SAVE</Save>:
                      <img src="/static/edit_icon.png"></img>
                    }
                  </Fix>
                </td>
              </tr>
            ))}
          </Tablestyle>
        </TableBack>
      </SpaceTable>
    )
  }
}
