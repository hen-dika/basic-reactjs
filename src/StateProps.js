import React, { Component } from "react";
import Operan from "./Operan";

class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "SAte",
    };
  }

  gantiMakanan = (makanan) => {
    this.setState({
      makanan: makanan,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.gantiMakanan("Burjo")}>
          Ganti Makanan
        </button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    );
  }
}

export default StateProps;
