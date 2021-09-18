import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  async componenentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    this.setState(
      Objects.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  render() {
    console.log(this.state);
    return <h2>Hello</h2>;
  }
}

export default withRouter(Details);
