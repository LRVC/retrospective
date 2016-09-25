import React, { Component } from 'react'
import '../App.css'
import Items from './Items.js'

class App extends Component {
  render() {
    const itemTypes = [
      'happy',
      'meh',
      'sad'
    ]

    return (
        <div className="container">
          <div className="banner">
              <h2 className="header" key='header'>Welcome to Mr Cooper Retrospective</h2>
          </div>
          <div className="item-types">
            {itemTypes.map(item =>
              <div className="item">
                <Items
                  key={item}
                  header={item.toUpperCase()}
                  listType={item}
                />
              </div>
            )}
          </div>
        </div>
    );
  }
}

export default App
