import React, { Component } from "react";

export default class SubLifecylce extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("Pecel");
  }

  render() {
    return (
      <div>
        <h2>component SubLifecylce</h2>
      </div>
    );
  }
}
