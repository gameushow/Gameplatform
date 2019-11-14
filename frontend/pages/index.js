import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Landing from '../components/LandingPage/landing'

export default class componentName extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Landing/>
    )
  }
}
