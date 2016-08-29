import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
            <ReactCSSTransitionGroup
              transitionName="carousel"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <h2 className="header" key='header'>Welcome to Mr Cooper Retrospective</h2>
            </ReactCSSTransitionGroup>
          </div>
          <div class="item-types">
            {itemTypes.map(item =>
              <div>
                <Items
                  key={item}
                  logo={item.toUpperCase()}
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
