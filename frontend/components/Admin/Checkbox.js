import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import {postScore, getScore, putScoreByTeamId } from '../../service/score';
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
            mode: 'none',
            status: this.props.status,
            team: this.props.data.team,
            teamList: this.props.data.teamList,
            data:this.props.data.data
        };

        this.true = this.true.bind(this);
        this.false = this.false.bind(this);
        this.none = this.none.bind(this);
    }

    async update(num,status) {
        let array;
        let data = [];
        const promise = new Promise((resolve, reject) => {
            this.setState(async state => {
                let team_id;
                let question_id;
                this.state.teamList.forEach(element => {
                    if (state.team[num].name == element.name) {
                        team_id = element.id;
                        let position=0;
                        for(let i=this.state.data.length-1;i<0;i--){
                            if(this.state.team[num].score_history[i].round == this.props.round+1){
                                position = i
                            }
                        }
                        question_id = state.team[num].score_history[position].question_id
                    }
                });
                data.push(
                    {
                        round: this.props.round+1,
                        question_id: question_id,
                        team_id: team_id,
                        game_id: 1,
                        status: status
                    },
                )
                array = { data }
                console.log(array)
                let responseData = await postScore(array);
                console.log(responseData)
                return resolve()
            });
            
        })

    promise.then(async () => {
        let teamData = await getScore();
        this.setState({ team: teamData.data })
    })
    }

true(){
    this.setState({
        mode: 'false',
    });
    this.props.setStatus(this.props.num, this.props.round, -1)
    if(this.props.round+1<this.props.data.round){
        console.log(this.props.round , this.props.data.round)
        this.update(this.props.num , -1)
    }  

}

false(){
    this.setState({
        mode: 'none',
    });
    this.props.setStatus(this.props.num, this.props.round, 0)
    if(this.props.round+1<this.props.data.round){
        console.log(this.props.round , this.props.data.round)
        this.update(this.props.num , 0)
    }

}

none(){
    this.setState({
        mode: 'true',
    });
    this.props.setStatus(this.props.num, this.props.round, 1)
    if(this.props.round+1<this.props.data.round){
        console.log(this.props.round , this.props.data.round)
        this.update(this.props.num , 1)
    }
}

componentDidMount(){
    if (this.state.status == 1) {
        this.setState({
            mode: 'true'
        })
    } else if (this.state.status == -1) {
        this.setState({
            mode: 'false'
        })
    } else {
        this.setState({
            mode: 'none'
        })
    }
    console.log(this.state.mode)
}

render() {
    if (this.state.mode == "true") {
        return (
            <div>
                <Box onClick={this.true} background="#37AB00" disabled={this.props.disabled}></Box>
            </div>
        );
    }
    else if (this.state.mode == "false") {
        return (
            <div>
                <Box onClick={this.false} background="#FF3232" disabled={this.props.disabled}></Box>
            </div>
        );
    } else {
        return (
            <div>
                <Box onClick={this.none} disabled={this.props.disabled}></Box>
            </div>
        );
    }
}
}
