import React, { Component } from 'react'
import styled from 'styled-components'

const Submit = styled.form`
    padding-top:0.5em;
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
    width:370px;
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
    padding-top:0.5em;
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
const DeleteBlock = styled.div`
    padding-right:1em;  
`
const SearchBlock = styled.div`
    padding-left:8em;
`
export default class AddDelete extends Component {
    render() {
        return (         
            <div className="container text-center">
                <div className="row">   
                    <div className="col">
                    <SearchBlock>
                        <Submit>
                            <TopicSearch>{this.props.search}</TopicSearch> <input type="text" name="search"/> <input type="submit" value="+ ADD"/>                              
                        </Submit>
                    </SearchBlock>                   
                    </div>  
                    <DeleteBlock>
                        <Delete>
                            <input type="submit" name="delete" value="- DELETE"/>
                        </Delete>
                    </DeleteBlock>                                                                                                                                                                                                 
                </div>           
            </div> 
                                       
        )
    }
}