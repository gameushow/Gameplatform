import React, { Component } from 'react'
import Topic from '../components/Topic';

export default class componentName extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">            
            <div className="col">
              <Topic/>
            </div>
            <div className="col">
              <Topic/>
            </div>
            <div className="col">
              <Topic/>
            </div>
            <div className="col">
              <Topic/>
            </div>    
          </div>        
        </div>                 
    )
  }
}
