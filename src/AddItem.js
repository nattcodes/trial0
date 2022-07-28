import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        {/* <label htmlFor="addItem">Add Item</label> */}
        <input 
            type="text"
            autoFocus
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
         />
         <button className='addBtn'
            type='submit'
            aria-label='Add Item'
         >
         </button>
    </form>
  )
}

export default AddItem