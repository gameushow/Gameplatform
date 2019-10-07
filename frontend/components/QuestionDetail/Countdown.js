import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'

const Time = styled.div`
  font-size:40px;
  color:white;
`
export default class Countdown extends Component {
    state = { minute: 3 , secound:2 };
  
    timer() {
      this.setState({
        secound: this.state.secound - 1
      });
  
      if(this.state.secound < 1){
        this.setState({
         minute: this.state.minute - 1,
         secound: 2
        });
      }
      if (this.state.minute < 0) {
        this.setState({
        secound: 0 ,
        minute :0
        });
        clearInterval(this.intervalId);
      }
    }
  
    componentDidMount() {
      this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
    render() {
      const { secound , minute} = this.state;
      return <Time>{minute}:{secound}</Time>;
    }
  }

