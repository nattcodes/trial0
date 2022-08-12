import React from 'react'
import LineItem from './LineItem'

const ItemList = ({items, checkBox, deleteBox}) => {
  return (
    <ul>
        {items.map((myItem) =>
          (
           <LineItem 
                key={myItem.id}
                myItem={myItem}
                checkBox= {checkBox}
                deleteBox= {deleteBox}
           />
          )
        )}
      </ul>
  )
}

export default ItemList