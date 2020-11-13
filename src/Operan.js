import React, { Component } from "react";

export default class Operan extends Component {
  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      <div>
        <h2>Operan state yang menjadi props {makanan}</h2>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => gantiMakanan("Burjo")}
        >
          Ganti
        </button>
      </div>
    );
  }
}
