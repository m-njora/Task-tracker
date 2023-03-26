import React, {useState} from 'react'


function Todo() {
    const [Todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    // const [editingIndex, setEditingIndex] = useState(null);
    // const handleNewTodoChange = (event) => {
    //   setNewTodo(event.target.value);
    // };
    const handleAddTodo = (event) => {
        event.preventDefault();
        if (editingIndex === null) {
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
    
    //   const handleEditTodo = (TodoIndex) => {
    //     setNewTodo(Todos[TodoIndex]);
    //     setEditingIndex(TodoIndex);
    //   };
    
    //   const handleDeleteTodo = (TodoIndex) => {
    //     setTodos(Todos.filter((_, index) => index !== TodoIndex));
    //     setEditingIndex(null);
    //   };
    
    return (
        <div className='form'>
        <h2>My Todos </h2>
        <form onSubmit={handleAddTodo}>
          <label htmlFor="new-Todo">New Todo:</label>
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
                {editingIndex === index ? (
                  <input type="text" value={newTodo} onChange={handleNewTodoChange} />
                ) : (
                  <>{Todo}</>
                )}
                {editingIndex === index ? (
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                ) : (
                  <>
                    <button onClick={() => handleEditTodo(index)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(index)}>X</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No Todos added yet</p>
        )}
      </div>
    );
      
}

export default Todo
