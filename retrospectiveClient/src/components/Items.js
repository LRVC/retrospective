import React, { Component } from 'react';


export default class Items extends Component {
    constructor(props) {
        super(props)

        this.itemList = this.itemList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateContent = this.updateContent.bind(this);

        this.state = {
            items: []
        }
    }

    itemList(items) {
        return items.map((item, index) => {
            return <li key={index}>{item.content}</li>
        })
    }

    addItem(e) {
      e.preventDefault()
      const itemsArray = this.state.items.concat([{content: this.state.content, id: Date.now()}])

      this.setState({
        items: itemsArray
      })
    }

    updateContent(e) {
      this.setState({ content: e.target.value})
    }

    render() {
        const { header, listType } = this.props;
        return (
            <div>
                <div className="item-header">{header}</div>
                <ul>
                  {this.itemList(this.state.items)}
                </ul>
                <div>
                    <form onSubmit={this.addItem}>
                        <input type="text"
                               placeholder={`Add your ${listType} item`}
                               onChange={this.updateContent}
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
