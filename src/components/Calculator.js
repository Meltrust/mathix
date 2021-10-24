import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker = (key) => {
    const objState = this.state;
    this.setState(() => calculate(objState, key));
  };

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="row row-cols-4">
        <div className="gray-bg text-end text-white col-12 py-4 fs-4 align-self-center">

          {total}
          {operation}
          {next}

        </div>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          AC
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          +/-
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          %
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          &divide;
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          7
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          8
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          9
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          x
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          4
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          5
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          6
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          -
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          1
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          2
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          3
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          +
        </button>
        <button className="col-6 fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          0
        </button>
        <button className="fs-5 py-4 border" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          .
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => this.clicker(e.target.textContent)}>
          =
        </button>

      </div>

    );
  }
}
