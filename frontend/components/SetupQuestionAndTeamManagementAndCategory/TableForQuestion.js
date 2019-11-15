import React, { Component } from "react";
import styled from "styled-components";

const TableBack = styled.table`
  width: 100%;
  background: #ebebeb;
  border: 2px solid #000000;
  box-sizing: border-box;
  height: 490px;
`
const SpaceTable = styled.div`
  padding-top: 0.5em;
`
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
    width:50px;
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
const Fonttext = styled.th`
  font-size: 24px;
  line-height: 28px;
  padding-top:8px;
  text-indent: 20px;
`
const Textth = styled(Fonttext)`
    text-indent:0px;
    text-align:center;
`
const Fonttextdata = styled.td`
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px; 
  
`
const Textsize = styled.p`
 word-break: break-all;
  margin-top:0.5em;
  width: 26em; 
  display: inline-block;
  
`
const Fix = styled.button`
  border: none;
  background: none;
`
const Iddata = styled.td`
  text-align:center;
`
const Rowedit = styled(Iddata)`
`
const Iconedit = styled.img`
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
                            <Textth>#</Textth>
                            <th>
                                <Check>
                                    <input type="checkbox" />
                                </Check>
                            </th>
                            <Fonttext>{this.props.titlename}</Fonttext>
                            <Fonttext>Description</Fonttext>
                            <Fonttext>Score</Fonttext>
                            <th></th>
                        </thead>
                        {
                            this.props.questionList.map((items, i) => (
                                <tr>
                                    <Iddata>{i + 1}</Iddata>
                                    <td>
                                        <Check >
                                            <input type="checkbox" onChange={() => this.props.onCheck(i)} />
                                        </Check >
                                    </td>
                                    <Fonttextdata >{items.category != null ? items.category.name : ""}</Fonttextdata>
                                    <Fonttextdata><Textsize>{items.question}</Textsize></Fonttextdata>
                                    <Fonttextdata>{items.score}</Fonttextdata>
                                    <Rowedit>
                                        <Fix onClick={() => this.props.onClick(i)}>
                                            {
                                                <Iconedit src="/static/edit_icon.png" width="30px" height="30px" ></Iconedit>
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
