import React, { Component } from 'react';


export default class Items extends Component {
    constructor(props) {
        super(props)

        this.itemList = this.itemList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateContent = this.updateContent.bind(this);

        this.state = {
            items: []
        };
    }

    itemList(items) {
        return items.map((item, index) => {
            return <li key={index}>{item.content}</li>
        })
    }

    addItem(event) {
      event.preventDefault()
      const itemsArray = this.state.items.concat([{content: this.state.content, id: Date.now()}])
      this.setState({
        items: itemsArray
      })
    }

    updateContent(event) {
      this.setState({ content: event.target.value})
    }

    render() {
        const { logo, listType } = this.props;
        return (
            <div>
                <div>{logo}</div>
                {this.itemList(this.state.items)}
                <div>
                    <form onSubmit={this.addItem}>
                        <input type="text"
                               placeholder={`Add your ${listType} item`}
                               defaultValue="example"
                               onChange={this.updateContent}
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
