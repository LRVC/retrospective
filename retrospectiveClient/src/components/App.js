import React, { Component } from 'react';
import '../App.css';
import Items from './Items.js'

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="banner">
            <h2 clasName="header">Welcome to Retrospective</h2>
          </div>

          <div className="item-types">
            <Items
                logo="HAPPY"
            />
            <Items
              logo="HAPPY"
            />
            <Items
              logo="HAPPY"
            />
          </div>
        </div>
    );
  }
}

export default App;
