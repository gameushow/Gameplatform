import React, { Component } from 'react'
import styled from 'styled-components'
import { receiveTimer } from '../../service/socket'
import fonts from '../../config/fonts'


const Time = styled.div`
  font-size:40px;
  color:white;
`
export default class Countdown extends Component {
    state = { minute:this.props.minute , second:this.props.second }
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
        second: 0 ,
        minute :0
        });
        clearInterval(this.intervalId);
        this.props.onTimeOut();
      }
    }
  
    componentDidMount() {
      this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
    render() {
      let time = receiveTimer("boardCastTimeForTimer")/1000;
      console.log(time);
      if(time!=NaN){
        this.setState({ minute: Math.floor(time/60) })
        this.setState({ second: Math.floor(time%60)  })
        time = NaN;
      }

      const { second , minute} = this.state;
        
      
      if(minute != 999 && second != 999){
        return <Time>{minute>9?minute:'0'+minute}:{second>9?second:'0'+second}</Time>;
      }else{
        return "Not started yet";
      }
    }
  }

