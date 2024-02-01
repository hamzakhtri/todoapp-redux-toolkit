import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: Date.now(),
        todo: "Hamza Ali Soomro",
        isCompleted: false
    }],
    editableTodo : {}
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo : (state , action)=>{
            const todo = {id: nanoid(), todo: action.payload, isCompleted: false};
            state.todos.push(todo);
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        editTodo : (state, action)=>{
            state.editableTodo = state.todos.find((todo) => todo.id === action.payload);
        },
        emptyEditableTodo : (state)=>{
            state.editableTodo = {};
        },
        updateTodo : (state, action)=>{
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, todo: action.payload.newTodo}: todo);
        }
        
    }
})

export const {addTodo, removeTodo, editTodo, emptyEditableTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;