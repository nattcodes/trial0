import React from 'react'

const LineItem = ({myItem, checkBox, deleteBox}) => {
  return (
    <li className='itemList' key={myItem.id}>
    <input 
    type="checkbox" 
    checked={myItem.checked} 
    onChange={() => checkBox(myItem.id)}
    />
    <label 
      style={(myItem.checked) ? {textDecoration:'line-through'} : null}
      onDoubleClick={() => checkBox(myItem.id)}
    >{myItem.item}</label>
    <button className='deleteBtn' onClick={() => deleteBox(myItem.id)}>x</button>
    
  </li>
  )
}

export default LineItem