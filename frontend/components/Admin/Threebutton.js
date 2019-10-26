import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../Admin/Countdown'
import socketService from '../../service/socket'

const socket = socketService.getSocketInstant();

const AllButton = styled.button`
    background: #C4C4C4; 
    border-radius: 50px;
    border:none;
    width: 250px;
    height: 100px;
    left: 596px;
    top: 880px;
    font-size:${fonts.Small};
        &:hover{
         border: 10px solid #000000;
    }
`

export default class Threebutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:this.props.mode,
            text:'Update'
        };
        this.handleUpdate = this.handleUpdate.bind(this);
      }

    handleUpdate(){
        this.setState({
            mode: 'next',
            text:'Next'
        });
    }

    handleClickTimer = (event) => {
        event.preventDefault()
        socket.emit('boardCastTimeForTimer', 100000);
    };
    
    handleClickRandomTeam = (event) => {
        event.preventDefault()
        socket.emit('boardCastRandomTeam', teams);
    };
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col col-lg-4">
                        <AllButton onClick={this.handleClickRandomTeam}>Random</AllButton>
                    </div>
                    <div class="col-lg-4">
                        <AllButton onClick={this.state.mode=='update'?this.handleUpdate:(this.props.onClick)}>{this.state.text}</AllButton>
                    </div>
                    <div class="col-lg-4">
                    <Countdown socket={socket} onTimeOut={this.onTimeOut} minute={this.state.minute} secound={this.state.secound} /><br />
                    <AllButton onClick={this.handleClickTimer}>Timer</AllButton>
                    </div>
                </div>
            </div>
            

        )
    }
}
