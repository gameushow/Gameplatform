import React, { Component } from 'react'
import Table from './Table'
import color from '../../config/color'
import fonts from '../../config/fonts'


export default class Admin extends Component {
  state = {
    isShow: true,
  };
  render() {
    return (
      <Table/>
      
    )
  }
}
