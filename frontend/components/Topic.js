import React, { Component } from 'react'
import styled from 'styled-components'


const Bg = styled.div`
    background-color:#1F3B63;
    border-radius:1em;
    margin-top:1.75em;   
    margin-left:5em;
    margin-right:5em;  
    padding-right:0.5em;
    padding-left:0.5em;
`
const Text = styled.div`
    padding:0.5em;
    color:#FFFFFF;
    text-align: center;
    font-size:2em;
   
`

export default class Topic extends Component {
    render() {
        return (
            <Bg>     
                <Text>
                    TOPIC
                </Text>                              
            </Bg>
        )
    }
}
