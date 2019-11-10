import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import socketService from '../../service/socket'

const socket = socketService.getSocketInstant();

const Time = styled.div`
  font-size:40px;
  color:white;
`
export default class Countdown extends Component {
    state = {
       minute:999 ,
       second:999 
    }
    timer() {
          this.setState({
            second: this.state.second - 1
          });
      
          if(this.state.second < 1){
            this.setState({
            minute: this.state.minute - 1,
            second: 59
            });
          }
          if (this.state.minute < 0) {
            this.setState({
            second: 999 ,
            minute :999
            });
            clearInterval(this.intervalId);
          }
    }
  
    componentDidMount() {
      socket.on("boardCastTimeForTimer", data => {
        this.setState({ 
            minute: Math.floor(data/60) ,
        })
        this.setState({ 
            second: Math.floor(data%60),
        })
        this.intervalId = setInterval(this.timer.bind(this), 1000); 
        console.log(this.state.minute , this.state.second)    
      });
        
        
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      let {second , minute} = this.state;
      if(minute != 999 && second != 999){
        return <Time>{minute>9?minute:'0'+minute}:{second>9?second:'0'+second}</Time>;
      }else{
        return "Timer";
      }
    }
  }

