import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../Admin/Countdown'
import socketService from '../../service/socket'
import { array } from 'prop-types'
import {getTeamList} from '../../service/team_member'
import table from './Table'

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

    state = {
        mode: this.props.mode,
        text: this.props.text,
        start: 'Timer',
        minute: 999,
        secound: 999,
        teams : []
    };

    onTimeOut = () => {
        this.setState({ hide: true });
    };

    handleUpdate = () => {
            this.setState({
                mode: 'next',
                text:'Next'
            });
    }


    handleClickTimer = (event) => {
        event.preventDefault()
        socket.emit('boardCastTimeForTimer', 100000)
    };

    handleClickRandomTeam = (event) => {
        event.preventDefault()
        if(array.length > 0 && this.state.teams.length>0){
            const randoms = Math.floor(Math.random()*(this.state.teams.length-1));
            console.log(randoms);
            this.props.updateCurrentRandomTeam(this.state.teams[randoms])
            socket.emit('boardCastRandomTeam',this.state.teams[randoms]);
            console.log(this.state.teams)
            this.state.teams.splice(randoms,1)
            console.log(this.state.teams)
            
        }
        
        
    };
    async componentDidMount(){
        const responce = await getTeamList()
        this.setState({
            teams : responce.data
        })

    }

    handleNext = () => {
        this.setState({
            mode: 'update',
            text:'Update'
        });

    }

    render() {
        const {text} = this.state;
        return (
            <div class="container">
                <div class="row">
                    <div class="col col-lg-4">
                        <AllButton onClick={this.handleClickRandomTeam}>Random</AllButton>
                    </div>
                    <div class="col-lg-4">
                        <AllButton onClick={this.state.mode == 'update' ? this.handleUpdate : (this.handleNext)}>
                            {this.state.mode}
                        </AllButton>
                    </div>
                    <div class="col-lg-4">
                        <AllButton onClick={this.handleClickTimer}>
                            <Countdown socket={socket} onTimeOut={this.onTimeOut} minute={this.state.minute} secound={this.state.secound} />
                        </AllButton>
                    </div>
                </div>
            </div>


        )
    }
}
