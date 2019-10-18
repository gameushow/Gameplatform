import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'

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

    handleClickTimer = (event) => {
        event.preventDefault()
        socket.emit('boardCastTimeForTimer', 100000);
    };
    
    handleClickRandomTeam = (event) => {
        event.preventDefault()
        const question = getTeamListResponse['data'];
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
                        <AllButton>Update</AllButton>
                    </div>
                    <div class="col-lg-4">
                    <AllButton onClick={this.handleClickTimer}>Timer</AllButton>
                    </div>
                </div>
            </div>
            

        )
    }
}
