import React, { useEffect, useState } from 'react'
import ListTask from './ListTask';

function AddTask() {
    const [value, setValue] = useState("");
    const [itemArray, setItemArray] = useState([]);
    useEffect(()=>{
        document.title = `you have ${itemArray.length} pending tasks`;
    })
    function addValue(e){
        e.preventDefault()
        var newArray = [...itemArray, value];
        setItemArray(newArray);
        setValue("");
    }
  return (
    <>
        <form className='new-item-form' onSubmit={addValue}>
            <div className='form-row'>
                <label htmlFor="input-box">New Item</label>
                <input type="text" id="input-box" value={value} onChange={(e)=> setValue(e.target.value)} />
                <button type="submit" className='btn'>Add</button>
            </div>
        </form>
        <ListTask itemArray={itemArray} setItemArray={setItemArray} />
    </>
  )
}

export default AddTask