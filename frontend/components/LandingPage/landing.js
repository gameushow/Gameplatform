import React, { Component } from 'react'
import styled from 'styled-components'
import color from '../../config/color'
const Headtext = styled.div`
    font-family: 'Staatliches', cursive;
    font-size:48px;
    text-align:center;
`
const Bg = styled.div`
    background-color:${color.Background};
    min-height:100vh;
`
const Text = styled.div`
    margin-top:1em;
`
const Butt = styled.div`
   text-align:center;
   margin-top:2em;
`

export default class Landing extends Component {
    render() {
        return (
            <Bg>
                <Headtext className="container">
                    <div className="row">
                        <Text className="col">
                           ICT Challenge 
                        </Text>                     
                    </div>
                    <div className="row">
                        <div className="col">
                           GameShow 
                        </div>                     
                    </div>
                </Headtext>
                <div className="container">
                    <Text className="row ">
                        <Butt className="col">
                            <a href="scoretodetail"><button>PRESENTATION</button></a>
                        </Butt>
                        <Butt className="col">
                            <a href="/admin/categories"><button>ADMIN PREPARE</button></a>
                        </Butt>
                        <Butt className="col">
                            <a href="/admin/admin"><button>ADMIN CONTROL</button></a>
                        </Butt>
                        <Butt className="col">
                            <a href="/admin/scoreboard"><button>SCORE BOARD</button></a>
                        </Butt>
                    </Text>
                </div>
            </Bg>
        )
    }
}
