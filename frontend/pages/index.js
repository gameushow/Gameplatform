import React, { Component } from 'react'
import Topic from '../components/ShowSign/Topic';
import Bgcolor from '../components/ShowSign/BgColor';
import ButtonSign from '../components/ShowSign/ButtonSign';
import Spacing from '../components/HomePage/Spacing';

export default class componentName extends Component {
  render() {
    return (
        <Bgcolor className="container-fluid">
          <div className="row">            
            <div className="col-lg-3">
              <Topic/>
              <Spacing />
              <center><ButtonSign /></center>
            </div>
            <div className="col-lg-3">
              <Topic/>
              <Spacing />
              <center><ButtonSign /></center>
            </div>
            <div className="col-lg-3">
              <Topic/>
              <Spacing />
              <center><ButtonSign /></center>
            </div>
            <div className="col-lg-3">
              <Topic/>
              <Spacing />
              <center><ButtonSign /></center>
            </div>    
          </div>        
                      

      
        
      </Bgcolor>
    )
  }
}
