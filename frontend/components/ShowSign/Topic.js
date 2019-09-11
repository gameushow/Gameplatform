import React, { Component } from 'react'
import styled from 'styled-components'
import AllQuiz from './AllQuiz'
const Bg = styled.div`
   background-color:#1F3B63;
   border-radius:1em;
   margin-top:1.75em;
   margin-left:3em;
   margin-right:3em;
   padding-right:0.5em;
   padding-left:0.5em;
   z-index: 1;
`
const Text = styled.div`
   padding:1em;
   color:#FFFFFF;
   text-align: center;
   font-size:2em;
`
export default class Topic extends Component {
   render() {
       return (
           <Bg>
               <Text>
                   {this.props.children}
               </Text>
           </Bg>
       )
   }
}