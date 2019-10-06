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
    padding-top:1.3em;
`
const Tablestyle = styled.table`
    height: 50px;
    width:100%;
    background-color: #808080;
    border: 2px  #000000;
    border-bottom:2px solid; 
    th{
        text-align:center;
        width:80px;
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
    text-indent:5px;
`

export default class TableList extends Component {
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
                </TableBack>              
            </SpaceTable>
        )
    }
}
