import React, { Component } from 'react'
import styled from 'styled-components'

const Fonttext = styled.div`
    font-size: 30px;
    line-height: 35px;
    padding-top:10px;
`
export default class TotalList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">                                    
                         <Fonttext>Total:{this.props.data.length}</Fonttext>                                          
                    </div>
                </div>
            </div>
        )
    }
}
