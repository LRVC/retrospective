import React, { Component } from 'react';


export default class Items extends Component {
    constructor(props) {
        super(props)

        this.itemList = this.itemList.bind(this);
        this.addItem = this.addItem.bind(this);

        //dummy data for testing
        this.items = [
            {content: "thing 1"},
            {content: "thing 2"},
            {content: "thing 3"}
        ]
    }

    componentDidMount() {
        this.setState({
            items: []
        })
    }

    itemList(items) {
        return items.map((item) => {
            return <li>{item.content}</li>
        })
    }

    addItem(event) {
        const itemsArray = this.state.items;

        itemsArray.push({
            content: event.target.value
        });

        this.setState({
            items: itemsArray
        })
    }

    render() {
        const { logo, listType } = this.props;
        return (
            <div>
                <div>{logo}</div>
                {this.itemList(this.items)}
                <div>
                    <form onSubmit={this.addItem}>
                        <input type="text"
                               placeholder={`Add your ${listType} item`}/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}