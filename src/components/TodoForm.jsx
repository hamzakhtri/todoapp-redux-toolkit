import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, emptyEditableTodo, updateTodo } from '../store/features/todo/todoSlice';

function TodoForm() {

    const dispatch = useDispatch();
    const editableTodo = useSelector(state => state.editableTodo);
    const [input, setInput] = useState("");
    const [newInput, setNewInput] = useState(editableTodo.todo);

    useEffect(() => {
        setNewInput(editableTodo.todo);
    }, [editableTodo]);


    const addTodoHandler = () => {
        dispatch(addTodo(input));
        setInput("");
    }

    const updateHandler = ()=>{
        dispatch(updateTodo({id: editableTodo.id, newTodo: newInput}));
        dispatch(emptyEditableTodo());
        setNewInput("");
    }




    if (editableTodo && Object.keys(editableTodo).length > 0) {
        return (
            <div className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)}
                />
                <button
                    type="button"
                    className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                    onClick={updateHandler}
                >
                    Update Todo
                </button>
            </div>
        )
    } else {

        return (
            <div className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="button"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={addTodoHandler}
                >
                    Add Todo
                </button>
            </div>
        )
    }


}

export default TodoForm