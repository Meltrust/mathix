import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="row row-cols-4">
        <div className="gray-bg text-end text-white col-12 py-4 fs-4 align-self-center">
          0
        </div>
        <button className="fs-5 py-4 border" type="button">
          AC
        </button>
        <button className="fs-5 py-4 border" type="button">
          +/-
        </button>
        <button className="fs-5 py-4 border" type="button">
          %
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button">
          &divide;
        </button>
        <button className="fs-5 py-4 border" type="button">
          7
        </button>
        <button className="fs-5 py-4 border" type="button">
          8
        </button>
        <button className="fs-5 py-4 border" type="button">
          9
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button">
          x
        </button>
        <button className="fs-5 py-4 border" type="button">
          4
        </button>
        <button className="fs-5 py-4 border" type="button">
          5
        </button>
        <button className="fs-5 py-4 border" type="button">
          6
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button">
          -
        </button>
        <button className="fs-5 py-4 border" type="button">
          1
        </button>
        <button className="fs-5 py-4 border" type="button">
          2
        </button>
        <button className="fs-5 py-4 border" type="button">
          3
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button">
          +
        </button>
        <button className="col-6 fs-5 py-4 border" type="button">
          0
        </button>
        <button className="fs-5 py-4 border" type="button">
          .
        </button>
        <button className="fs-5 py-4 border btn-warning" type="button">
          =
        </button>

      </div>

    );
  }
}
