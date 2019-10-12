import React, { Component } from 'react'
import styled from 'styled-components'

const Fonttext = styled.div`
    font-size: 30px;
    line-height: 35px;
    padding-top:10px;
`
export default class TotalList extends Component {
    state = {
        data:[ 
            {
                id: 1,
                game_id: 1,
                name: "IvdG0018",
                created_at: "2019-10-06" ,
                updated_at: "2019-10-06" ,
                deleted_at: null,
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
            <div className="container">
                <div className="row">
                    <div className="col">                                    
                        <Fonttext>Total:{this.state.data.length}</Fonttext>                                         
                    </div>
                </div>
            </div>
        )
    }
}
