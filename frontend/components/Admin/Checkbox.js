import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'

const Box = styled.button`
    width: 36px;
    height: 36px;
    border:none;
    background: ${props => props.background}
`

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'none'
        };
        
        this.true = this.true.bind(this);
        this.false = this.false.bind(this);
        this.none = this.none.bind(this);
      }

    true(){
        this.setState({
            mode: 'false',
        });
    }

    false(){
        this.setState({
            mode: 'none',
        });
    }

    none(){
        this.setState({
            mode: 'true',
        });
    }

    render() {
        if(this.state.mode == "true"){
            return (
                <div>
                    <Box onClick={this.true} background="#37AB00" disabled={this.props.disabled}></Box>
                    {console.log(this.props.data.team[this.props.data.index].name)}
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
