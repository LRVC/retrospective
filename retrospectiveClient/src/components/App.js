import React, { Component } from 'react';
import '../App.css';
import Items from './Items.js'

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="banner">
            <h2 className="header">Welcome to Retrospective</h2>
          </div>

          <div className="item-types">
            <Items
                logo="HAPPY"
                listType="happy"
            />
          </div>
        </div>
    );
  }
}

export default App;
