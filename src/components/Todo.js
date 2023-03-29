import React, {useState} from 'react'
import './css/todo.css'

function Todo() {
    const [Todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const handleNewTodoChange = (event) => {
      setNewTodo(event.target.value);
    };

    // add a todo (post method)
    const handleAddTodo = async (event) => {
        event.preventDefault();
        if (editingIndex === null) {
        const response = await fetch('https://task-rails.onrender.com/todos/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTodo, completed: false })
        });
        const newTodoData = await response.json();

            setTodos([...Todos, newTodo]);
            setNewTodo('');
      
        } else {
          const newTodos = [...Todos];
          newTodos[editingIndex] = newTodo;
          setTodos(newTodos);
          setNewTodo('');
          setEditingIndex(null);
        }
      };
    
      const handleEditTodo = async (todoIndex) => {
        // PUT request to the server
        const todoUpdate = Todos[todoIndex];
        const response = await fetch(`http://localhost:3000/todos/${todoUpdate.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: newTodo, completed: false })
        });
        // update the todo item in state
          const updatedTodoData = await response.json();
          const updatedTodos = [...Todos];
          updatedTodos[todoIndex] = updatedTodoData;
          setTodos(updatedTodos);
        // reset the newTodo and editingIndex state
        setNewTodo('');
        setEditingIndex(null);

        // setNewTodo(Todos[TodoIndex]);
        // setEditingIndex(TodoIndex);
      };
    
      const handleDeleteTodo = async (todoIndex) => {
        const todoDelete = Todos[todoIndex];

        // delete a todo (delete method)

        const response = await fetch(`https://task-rails.onrender.com/todos/${todo.id}`, {
        method: 'DELETE'
        });
        if (response.ok) {
          // Remove the deleted todo from the state
          const updatedTodos = Todos.filter((_, index) => index !== todoIndex);
          setTodos(updatedTodos);
      
          // Reset the editing index
          setEditingIndex(null);
        } else {
          console.log('Failed to delete todo');
        }
      };
      //   setTodos(Todos.filter((_, index) => index !== TodoIndex));
      //   setEditingIndex(null);
      // };
    
    return (
        <div className='form'>
        <h2>
          My Todos
        </h2>
        <form onSubmit={handleAddTodo}>
          <label htmlFor="new-Todo">
            Add a todo to get started
          </label>
          <input
            type="text"
            id="new-Todo"
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <button type="submit">{editingIndex !== null ? 'Save Todo' : 'Add Todo'}</button>
        </form>
        {Todos.length > 0 ? (
          <ul>
            {Todos.map((Todo, index) => (
              <li key={index}>

               {/* checkbox */}

                <>
                  <input type="checkbox" id="cbx2" style={{display: 'none'}} />
                  <label htmlFor="cbx2" className="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                  </label>
                </>
                {/* renders the todo item in either an editable or non-editable form, depending on the state */}
                {editingIndex === index ? (
                  <input type="text" value={newTodo} onChange={handleNewTodoChange} />
                ) : (
                  
                  <>{Todo}</>
  
                )}
                {/* If editingIndex equals index, then Cancel */}
                {editingIndex === index ? (
                  <button onClick={() => setEditingIndex(null)}>X</button>
                ) : (
                  // If editingIndex is not equal to index, then an "Edit" button and a "Delete" button are rendered.
                  <>

                    <button onClick={() => handleEditTodo(index)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(index)}>X</button>

                  </>
        
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>You dont have any Todos yet</p>
        )}
      </div>
    );
      
}

export default Todo
