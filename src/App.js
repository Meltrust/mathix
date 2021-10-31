import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import NavBar from './components/Nav';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="bg-dark bg-gradient vh-100 d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/calculator">
                  <Calculator />
                </Route>
                <Route path="/quote">
                  <Quote />
                </Route>
                <Route path="*">Not found</Route>
              </Switch>
            </div>
          </div>
        </main>
      </>
    );
  }
}
