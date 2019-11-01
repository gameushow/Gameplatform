import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import { getScore } from '../../service/score';
// import {setStatus} from './Table'
import Table from './Table'
import table from './Table';

const Box = styled.button`
    width: 36px;
    height: 36px;
    border:none;
    background-color:transparent;
    background: ${props => props.background};
`

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'none',
            status:this.props.status
        };
        
        this.true = this.true.bind(this);
        this.false = this.false.bind(this);
        this.none = this.none.bind(this);
      }

    true(){
        this.setState({
            mode: 'false',
        });
        this.props.setStatus(this.props.num ,this.props.round, -1)
        console.log(this.props.status , this.props.num,this.props.status);
        
    }

    false(){
        this.setState({
            mode: 'none',
        });
        this.props.setStatus(this.props.num ,this.props.round, 0)
        console.log(this.props.status , this.props.num,this.props.status);
        
    }

    none(){
        this.setState({
            mode: 'true',
        });
        console.log(this.props.status , this.props.num,this.props.status);
        this.props.setStatus(this.props.num ,this.props.round, 1)
    }

    componentDidMount(){
        if(this.state.status==1){
            this.setState({
                mode:'true'
            })
        }else if(this.state.status==-1){
            this.setState({
                mode:'false'
            })
        }else{
            this.setState({
                mode:'none'
            })
        }
        console.log(this.state.mode)
    }

    render() {
                    if(this.state.mode == "true"){
                        return (
                            <div>
                                <Box onClick={this.true} background="#37AB00" disabled={this.props.disabled}></Box>
                            </div>
                        );
                    }
                    else if(this.state.mode == "false"){
                        return (
                            <div>
                                <Box onClick={this.false} background="#FF3232" disabled={this.props.disabled}></Box>
                            </div>
                        );
                    }else{
                        return (
                            <div>
                                <Box onClick={this.none} disabled={this.props.disabled}></Box>
                            </div>
                        );  
                    }
    }
}
