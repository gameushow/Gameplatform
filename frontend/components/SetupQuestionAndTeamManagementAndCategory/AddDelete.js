import React, { Component } from "react";
import styled from "styled-components";

const Submit = styled.div`
  input[type="text"] {
    width: 370px;
    height: 45px;
    background: #e8e7e7;
    border: 1px solid #7c7c7c;
    border-radius: 4px;
  }
`;
const Addbutton = styled.button`
  border: none;
  width: 120px;
  height: 42px;
  background-color: #37ab00;
  color: #fff;
  font-size: 18px;
  line-height: 21px;
  margin-left: 1em;
`;
const TopicSearch = styled.text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;
const Delete = styled(Addbutton)`
  background-color: #ff4040;
`;
const AddDeletebutton = styled.div`
  margin-top: 0.5em;
`;
export default class AddDelete extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 text-center align-self-end">
            <div>
                <Submit>
                <TopicSearch>{this.props.search}</TopicSearch>
                <input type="text" name="search" onChange={this.props.changeName} value={this.props.name}/>
              </Submit>              
            </div>
          </div>
          <AddDeletebutton className="col-lg-4 col-md-6  align-self-end text-center">
            <Addbutton onClick={this.props.onAdd}>+ADD</Addbutton>
            <Delete onClick={() => this.props.onDelete()}>-DELETE</Delete>
          </AddDeletebutton>
        </div>
      </div>
    );
  }
}
