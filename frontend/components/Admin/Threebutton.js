import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import Countdown from '../Admin/Countdown'
import socketService from '../../service/socket'
import { array } from 'prop-types'
import {getTeamList} from '../../service/team_member'

const socket = socketService.getSocketInstant();

const AllButton = styled.button`
    background: #C4C4C4; 
    border-radius: 50px;
    border:none;
    width: 250px;
    height: 100px;
    font-size:${fonts.Small};
        &:hover{
         border: 10px solid #000000;
    }
`
const Edit = styled.div`
    margin-top : 30px;

`

export default class Threebutton extends Component {
    state = {
        mode: this.props.mode,
        text: this.props.text,
        start: 'Timer',
        minute: 999,
        secound: 999,
        teams : [],
        time : 0,
    };

    onTimeOut = () => {
        this.setState({ hide: true });
    };

    handleClickTimer = (event) => {
        event.preventDefault()
        socket.emit('boardCastTimeForTimer', this.state.time) 
    };

    handleClickRandomTeam = (event) => {
        event.preventDefault()
        if(this.state.teams.length > 0 ){
            let randoms = Math.floor(Math.random()*(this.state.teams.length-1))
            let randomTeam = this.state.teams[randoms]
            this.props.updateCurrentRandomTeam(randomTeam)
            socket.emit('boardCastRandomTeam',randomTeam);	           
            this.state.teams.splice(randoms,1)	          
        }
    };
    async componentDidMount(){
        const responce = await getTeamList()
        this.setState({
            teams : responce.data
        })
        socket.on("boardCastSendQuestion", data => {
            this.setState({ 
                minute: Math.floor(data.time/60) ,
                secound: Math.floor(data.time%60),
                time:data.time
            })
          });
    }
   

    componentWillReceiveProps(nextProps) {
        const { mode } = this.props.mode
         if (nextProps.mode !== mode) {
           this.setState({ mode:nextProps.mode })
         }
    }


    update = () =>{
        this.setState({
             mode: 'Next' ,
        });
        this.props.data.mode='Next'
    }

    render() {
        return (
            <Edit class="container">
                <div class="row">
                    <div class="col col-lg-4">
                        <AllButton onClick={this.handleClickRandomTeam}>Random</AllButton>
                    </div>
                    <div class="col-lg-4">
                        <AllButton onClick={this.state.mode == 'Update' ? () =>{this.update();this.props.update()} : (this.props.next)}>
                            {this.state.mode}
                        </AllButton>
                    </div>
                    <div class="col-lg-4">
                        <AllButton onClick={this.handleClickTimer}>
                            <Countdown socket={socket} onTimeOut={this.onTimeOut} minute={this.state.minute} secound={this.state.secound} />
                        </AllButton>
                    </div>
                </div>
            </Edit>


        )
    }
}