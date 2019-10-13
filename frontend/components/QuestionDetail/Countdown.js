import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'


const Time = styled.div`
  font-size:40px;
  color:white;
`
export default class Countdown extends Component {

    constructor(props){
      super(props);
      this.state = { minute:props.minute , secound:props.secound };
    }

    timer() {
      this.setState({
        secound: this.state.secound - 1
      });
  
      if(this.state.secound < 0){
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
        return "Not started yet";
      }
      
    }
  }

