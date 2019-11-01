import React, { Component } from 'react'
import styled from 'styled-components'


const Time = styled.div`
  font-size:40px;
  color:white;
`
export default class Countdown extends Component {

    state = { minute:this.props.minute , secound:this.props.secound }

    timer() {

      this.setState({
        secound: this.state.secound - 1
      });
  
      if(this.state.secound < 1){
        this.setState({
         minute: this.state.minute - 1,
         secound: 59
        });
      }
      if (this.state.minute < 0) {
        this.setState({
        secound: 0 ,
        minute :0
        });
        clearInterval(this.intervalId);
        this.props.onTimeOut();
      }
    }
  
    componentDidMount() {
      this.props.socketInstant.on("boardCastSendQuestion", data => {
        this.setState({ minute: Math.floor(data.time/60) })
        this.setState({ secound: Math.floor(data.time%60)  })
      });
      this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      const { secound , minute} = this.state;
      if(minute != 999 && secound != 999){
        return <Time>{minute>9?minute:'0'+minute}:{secound>9?secound:'0'+secound}</Time>;
      }else{
        return <Time>Timer</Time>;
      }
    }
  }

