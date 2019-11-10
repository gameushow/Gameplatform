import React, { Component, Fragment } from "react";
import ButtonSign from "./ButtonSign";
import QuestionDetail from "../../pages/admin/QuestionDetail";
import Background from "./Background/Background";
import { Link } from "react-scroll";

export default class Scoreanddetail extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <section>
            <Background />
            <ButtonSign to="detail" />
          </section>
          <section id="detail">
            <QuestionDetail />
          </section>
        </Fragment>
      </div>
    );
  }
}
