import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [initialSt, setSt] = useState({ total: '0', next: null, operation: null });
  const { total, next, operation } = initialSt;

  const clicker = (key) => {
    setSt(() => calculate(initialSt, key));
  };

  return (

    <div className="row row-cols-4">
      <div className="gray-bg text-end text-white col-12 py-4 fs-4 align-self-center">

        {total}
        {operation}
        {next}

      </div>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        AC
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        +/-
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        %
      </button>
      <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => clicker(e.target.textContent)}>
        &divide;
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        7
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        8
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        9
      </button>
      <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => clicker(e.target.textContent)}>
        &times;
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        4
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        5
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        6
      </button>
      <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => clicker(e.target.textContent)}>
        &minus;
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        1
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        2
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        3
      </button>
      <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => clicker(e.target.textContent)}>
        +
      </button>
      <button className="col-6 fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        0
      </button>
      <button className="fs-5 py-4 border" type="button" onClick={(e) => clicker(e.target.textContent)}>
        .
      </button>
      <button className="fs-5 py-4 border btn-warning" type="button" onClick={(e) => clicker(e.target.textContent)}>
        =
      </button>

    </div>

  );
};

export default Calculator;
