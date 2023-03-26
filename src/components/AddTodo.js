import React from 'react'

function AddTodo() {
    return (
        <form method='post'> 
            <input type= "text" name='item' placeholder='enter todo'/>
            <button>Add</button>
        </form>
    )
}

export default AddTodo

