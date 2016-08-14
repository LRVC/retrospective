import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="banner">
            <h2 clasName="header">Welcome to Retrospective</h2>
          </div>

          <div className="item-types">

            <div className="item-type__happy">
              <div className="item-type__happy-logo">
                : )
              </div>

              <div className="item-type__happy-container">
                <ul>
                  <li>happy thing</li>
                  <li>happy thing 2</li>
                  <li>happy thing 3</li>
                </ul>
              </div>

            </div>

            <div className="item-type__meh">
              <div className="item-type__meh-logo">
                : /
              </div>

              <div className="item-type__meh-container">
                <ul>
                  <li>meh thing</li>
                  <li>meh thing 2</li>
                  <li>meh thing 3</li>
                </ul>
              </div>

            </div>

            <div className="item-type__sad">
              <div className="item-type__sad-logo">
                : (
              </div>

              <div className="item-type__sad-container">
                <ul>
                  <li>sad thing</li>
                  <li>sad thing 2</li>
                  <li>sad thing 3</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default App;
