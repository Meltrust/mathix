import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <main className="bg-dark vh-100 d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <section className="col-lg-7">
              <Calculator />
            </section>
          </div>
        </div>
      </main>
    );
  }
}
