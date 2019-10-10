import React, { Component } from 'react'
import styled from 'styled-components'

const TableBack = styled.table`
    width:100%;
    background: #EBEBEB;
    border: 2px solid #000000;
    box-sizing: border-box;
    height:430px;
`
const SpaceTable = styled.div`
    padding-top:0.5em;
`
const Tablestyle = styled.table`
    height: 50px;
    width:100%;
    background-color: #808080;
    border: 2px  #000000;
    border-bottom:2px solid;
    border-collapse: collapse; 
    border-left:hidden;
    border-right:hidden;
    th{
        text-align:center;
        width:80px;
        border-right: 2px solid #000000;
        border-left: 2px solid #000000;
    }
    tr{
        font-size: 24px;
        line-height: 28px;
    }
`
const Check = styled.form`
    input[type=checkbox]{
    background: #E8E7E7;
    border: 1px solid #7C7C7C;
    border-radius:4px;  
    width:20px;
    height:20px;  
    }
    padding-top:3px;
`
const Fonttext = styled.td`
    font-size: 24px;
    line-height: 28px;
    text-indent:20px;
`
const TableStyleData = styled(Tablestyle)`
    background-color: #C4C4C4;
`
export default class TableList extends Component {
    state = {
        data:[ 
            {
                id: 1,
                game_id: 1,
                name: "IvdG0018",
                created_at: "2019-10-06" ,
                updated_at: "2019-10-06" ,
                deleted_at: null
            },
            {
                id: 2,
                game_id: 1,
                name: "p0cBzCsP",
                created_at: "2019-10-06" ,
                updated_at: "2019-10-06" ,
                deleted_at: "null"
            },
            {
                id: 3,
                game_id: 1,
                name: "oPWhc8qo",
                created_at: "2019-10-06" ,
                updated_at: "2019-10-06" ,
                deleted_at: null
            }
        ]
    };
    render() {
        return (
            <SpaceTable className="container">
                <TableBack>
                    <Tablestyle>
                        <tr>
                            <th>#</th>
                            <th>
                            <Check>
                                <input type="checkbox"/>
                            </Check>
                            </th>
                            <Fonttext>
                                {this.props.titlename}
                            </Fonttext>
                            <th></th>
                        </tr>
                    </Tablestyle>
                    {this.state.data.map((items,i) => (
                    <TableStyleData>
                        <tr>
                            <th>{items.id}</th>
                            <th>
                            <Check>
                                <input type="checkbox"/>
                            </Check>
                            </th>
                            <Fonttext>
                                {items.name}
                            </Fonttext>
                            <th></th>
                        </tr>
                    </TableStyleData>
                    ))}
                    
                </TableBack>              
            </SpaceTable>
        )
    }
}
