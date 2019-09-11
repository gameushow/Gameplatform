import React, { Component } from 'react'
import Bgcolor from '../components/ShowSign/BgColor';
import ButtonSign from '../components/ShowSign/ButtonSign';
import Background from '../components/ShowSign/Background/Background';
import styled from 'styled-components'

export default class componentName extends Component {
  render() {
    return (
      <Bgcolor>
        <Background />
        <div className = "container">
          <center>
            <ButtonSign />
          </center>
        </div>
      </Bgcolor>
    )
  }
}
