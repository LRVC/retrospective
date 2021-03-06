import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => (
  <ul>
    {items.map(item =>
      <Item
        key={Date.now()}
        {...item}
      />
    )}
  </ul>
)

export default ItemList
