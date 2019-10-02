import React, { Component } from 'react'
import ButtonSign from '../../components/ShowSign/ButtonSign';
import Background from '../../components/ShowSign/Background/Background';


export default class componentName extends Component {
  render() {
    return (
      <div>
        <Background />
        <div className = "container">
          <center>
            <ButtonSign />
          </center>
        </div>
      </div>
    )
  }
}
