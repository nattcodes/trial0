
import React from 'react'
import ItemList from './ItemList';


const Content = ({items, checkBox, deleteBox}) => {
  
  return (
    <main>
      {items.length ? (
       <ItemList
          items={items}
          checkBox= {checkBox}
          deleteBox= {deleteBox}
       />
       
      ) : ( <p style={{marginTop: '2rem'}}>Empty List</p>)}
        
    </main>
  )
};




export default Content