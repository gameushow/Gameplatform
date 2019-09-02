import React, { Component } from 'react'
import styled from 'styled-components'
import Background from './Background'

const Title = styled.h1`
color : white;
text-align:center;
font-size:72px;


`

const Table = styled.div`
  background: #302B2D;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const Text = styled.div`
  font-family: Pixel;
  font-size: 48px;
  line-height: 51px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`

export default class componentName extends Component {
  render() {
    return (
      <Background>
          
          <Title>SCOREBOARD</Title>
          <Table >
              <table>
                <tr>
                  <th >
                    <p className="p-2">rank</p>
                    <p>Team</p>
                  </th>
                </tr>
              </table>
          </Table>
        
      </Background>
    )
  }
}
