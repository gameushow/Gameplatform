import React, { Component } from 'react'
import Bgcolor from '../components/ShowSign/BgColor';
import ButtonSign from '../components/ShowSign/ButtonSign';
import Background from '../components/ShowSign/Background/Background';
import styled from 'styled-components'

const DivMargin = styled.div`
    margin-left:1.5em;
    margin-right:1.5em;
`

export default class componentName extends Component {
  render() {
    return (
      
      <Bgcolor className="fluid-container">
        <Background />
        <DivMargin className="row">
          <div className="col-lg">
            <center><ButtonSign /></center>
          </div>
          {/* <div className="col-lg">
            <center><ButtonSign /></center>
          </div>
          <div className="col-lg">
            <center><ButtonSign /></center>
          </div>
          <div className="col-lg">
            <center><ButtonSign /></center>
          </div> */}
        </DivMargin>
      </Bgcolor>
    )
  }
}
