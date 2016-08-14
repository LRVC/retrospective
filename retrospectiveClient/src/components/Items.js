import React, { Component } from 'react';


export default class Items extends Component {
    constructor(props) {
        super(props)

        this.itemList = this.itemList.bind(this)
    }
    get items() {
        return [
            {content: 'first thing'},
            {content: 'second thing'},
            {content: 'third thing'}
        ]
    }

    itemList(items) {
        return items.map((item) => {
            return <li>{item.content}</li>
        })
    }

    render() {
        return (
            <div>
                <div>{this.props.logo}</div>
                {this.itemList(this.items)}
            </div>
        )
    }
}