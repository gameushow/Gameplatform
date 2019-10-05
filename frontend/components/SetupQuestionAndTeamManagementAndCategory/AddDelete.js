import React, { Component } from 'react'
import styled from 'styled-components'

const Submit = styled.form`
    padding-top:1em;
    input[type=submit] {
    border: none;
    width: 120px;
    height: 42px;
    background-color: #37AB00;
    color:#fff;
    font-size: 18px;
    line-height: 21px;
    }
    input[type=text]{
    width:350px;
    height:45px;
    background: #E8E7E7;
    border: 1px solid #7C7C7C;
    border-radius: 4px;
    }
`
const TopicSearch = styled.text`
    font-size: 24px;
    line-height: 28px;
`
const Delete = styled.form`
    padding-top:1em;
    input[type=submit] { 
    border: none; 
    width: 120px;
    height: 42px;
    background-color: #FF4040;
    font-size: 18px;
    line-height: 21px;
    color:#fff;
    }
`
export default class AddDelete extends Component {
    render() {
        return (         
            <div className="container text-center">
                <div className="row">   
                    <div className="col">
                        <Submit>
                            <TopicSearch>{this.props.search}</TopicSearch> <input type="text" name="search"/> <input type="submit" value="+ ADD"/>                              
                        </Submit>
                    </div>                                                                
                        <Delete>
                            <input type="submit" name="delete" value="- DELETE"/>
                        </Delete>                                                                                                             
                </div>           
            </div> 
                                       
        )
    }
}
